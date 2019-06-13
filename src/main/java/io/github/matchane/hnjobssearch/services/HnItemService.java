/**
 * 
 */
package io.github.matchane.hnjobssearch.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.elasticsearch.search.sort.SortOrder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import io.github.matchane.hnjobssearch.dtos.HnItem;
import io.searchbox.core.Index;
import io.searchbox.core.Search;
import io.searchbox.core.SearchResult;
import io.searchbox.core.SearchResult.Hit;
import io.searchbox.indices.mapping.PutMapping;

/**
 * HN items service.
 * 
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@Service
public class HnItemService {
	@Value("${es.hn-items.index.name}")
	private String indexName;
	@Value("${es.hn-items.index.overwrite}")
	private String overwriteExistingIndex;
	@Value("${hn.item.start-id}")
	private String initialStartId;
	@Value("${es.task.period}")
	private String indexingPeriod;
	@Autowired
	private ElasticSearchService searchService;
	@Autowired
	private HnApiService hnApi;

	private static final Logger log = LoggerFactory.getLogger(HnItemService.class);

	/**
	 * Initialize the job items index on the application start.<br>
	 * Should create the index and populate it with existing items.<br>
	 * TODO update index if exists?
	 * 
	 * @see {@link #indexExistingJobItems()}
	 * @throws IOException
	 */
	@EventListener(ApplicationReadyEvent.class)
	public void initIndex() throws IOException {
		final PutMapping putMapping = new PutMapping.Builder(indexName, HnItem.getEsTypeName(), HnItem.getEsMapping())
				.build();

		searchService.createIndex(indexName, putMapping, Boolean.parseBoolean(overwriteExistingIndex));
		indexExistingJobItems();
	}

	/**
	 * Index existing Job items starting from the provided {@link #startId}.
	 */
	public void indexExistingJobItems() {
		long maxId = hnApi.getMaxItemId();
		long startId = Long.parseLong(initialStartId);

		log.info("Indexing Existing Items");
		rangeIndex(startId, maxId);

		log.info("Indexing Existing Items Ended. Activating the periodic indexing");
		Runnable task = () -> refreshIndex();
		ScheduledExecutorService executor = Executors
				.newScheduledThreadPool(Runtime.getRuntime().availableProcessors());
		int period = Integer.valueOf(indexingPeriod);
		executor.scheduleAtFixedRate(task, period, period, TimeUnit.MILLISECONDS);

	}

	/**
	 * Add a item to the {@link #indexName}.
	 * 
	 * @param item item to index
	 */
	public void indexItem(HnItem item) {
		Index index = new Index.Builder(item).index(indexName).type(HnItem.getEsTypeName()).build();
		try {
			searchService.indexDocument(index);
		} catch (IOException e) {
			log.error(e.getMessage());
		}
	}

	/**
	 * Add newly posted items to the {@link #indexName}.<br>
	 * This function fetches the last indexed item and adds all what have posted
	 * since.<br>
	 * <i>Should add support for very old items dynamic cleanup</i>
	 * 
	 */
	public void refreshIndex() {
		try {
			long indexedMaxId = getMaxIndexedItemId();
			long maxId = hnApi.getMaxItemId();

			if (indexedMaxId < maxId) {
				indexedMaxId++;
				rangeIndex(indexedMaxId, maxId);
			}

		} catch (IOException e) {
			log.error(e.getMessage());
		}

	}

	/**
	 * Range index items, uses {@link LongStream}.
	 * 
	 * @param startId Indexing start id (Inclusive)
	 * @param endId   Indexing end id (Inclusive)
	 */
	private void rangeIndex(long startId, long endId) {
		long startTime = System.currentTimeMillis();

		log.info("Range Indexing Started, startId: " + startId + " | endId: " + endId);
		LongStream.rangeClosed(startId, endId).forEach(indexingId -> {
			final HnItem itemToIndex = hnApi.getItem(indexingId);

			log.info("Indexing Item: " + itemToIndex.toString());
			indexItem(itemToIndex);
		});

		long stopTime = System.currentTimeMillis();
		long elapsedTime = stopTime - startTime;
		log.info("Range Indexing Ended, " + startId + "->" + endId + ", took " + elapsedTime + "ms");
	}

	/**
	 * Search indexed items.
	 * 
	 * @param term      The search term
	 * @param ascending Posting date sorting
	 * @return An empty list if the search operation failed or received no hits.
	 * @throws IOException
	 */
	public List<HnItem> searchItems(String term, boolean ascending) throws IOException {
		List<HnItem> results = new ArrayList<HnItem>();

		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		searchSourceBuilder.query(QueryBuilders.matchQuery("_all", term));
		searchSourceBuilder.sort("date", ascending ? SortOrder.ASC : SortOrder.DESC);

		Search search = new Search.Builder(searchSourceBuilder.toString())//
				.addIndex(indexName)//
				.addType(HnItem.getEsTypeName())//
				.build();

		SearchResult result = searchService.search(search);
		List<Hit<HnItem, Void>> hits = result.getHits(HnItem.class);
		hits.stream().map(h -> results.add(h.source));

		return results;
	}

	/**
	 * Get last indexed items.
	 * 
	 * @param size      max list size
	 * @param ascending Posting date sorting
	 * @return An empty list if the index is empty.
	 * @throws IOException
	 */
	public List<HnItem> getLastItems(boolean ascending, int size) throws IOException {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		searchSourceBuilder.query(QueryBuilders.matchAllQuery());
		searchSourceBuilder.sort("time", ascending ? SortOrder.ASC : SortOrder.DESC);
		searchSourceBuilder.size(size);

		Search search = new Search.Builder(searchSourceBuilder.toString())//
				.addIndex(indexName)//
				.addType(HnItem.getEsTypeName())//
				.build();

		SearchResult result = searchService.search(search);
		List<Hit<HnItem, Void>> hits = result.getHits(HnItem.class);
		return hits.stream().map(h -> h.source).collect(Collectors.toList());
	}

	/**
	 * Get the max id of indexed items.
	 * 
	 * @param size      max list size
	 * @param ascending Posting date sorting
	 * @return An empty list if the index is empty.
	 * @throws IOException
	 */
	public long getMaxIndexedItemId() throws IOException {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		searchSourceBuilder.query(QueryBuilders.matchAllQuery());
		searchSourceBuilder.sort("id", SortOrder.DESC);
		searchSourceBuilder.size(1);

		Search search = new Search.Builder(searchSourceBuilder.toString())//
				.addIndex(indexName)//
				.addType(HnItem.getEsTypeName())//
				.build();

		SearchResult result = searchService.search(search);
		List<Hit<HnItem, Void>> hits = result.getHits(HnItem.class);
		return hits.stream().map(h -> h.source.getId()).collect(Collectors.toList()).get(0);
	}
}
