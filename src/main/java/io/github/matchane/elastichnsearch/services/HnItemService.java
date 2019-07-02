/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.services;

import io.github.matchane.elastichnsearch.dtos.HnItem;
import io.searchbox.core.Index;
import io.searchbox.core.Search;
import io.searchbox.core.SearchResult;
import io.searchbox.core.SearchResult.Hit;
import io.searchbox.indices.mapping.PutMapping;
import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.elasticsearch.search.sort.SortOrder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

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
    @Value("${es.hn-items.type.toindex}")
    private String typesToindexRaw;
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
     * Initialize the items index: Create the index and populate it with
     * existing items.<br>
     * Should be run on the application start.
     *
     * @see {@link #indexExistingItems()}
     * @throws IOException
     */
    public void initIndex() throws IOException {
        final PutMapping putMapping = new PutMapping.Builder(indexName, HnItem.esTypeName, HnItem.getEsMapping())
                .build();

        searchService.createIndex(indexName, putMapping, Boolean.parseBoolean(overwriteExistingIndex));
        indexExistingItems();
    }

    /**
     * Index existing items starting from the provided {@link #initialStartId}.
     */
    public void indexExistingItems() {
        long maxId = hnApi.getMaxItemId();
        long startId = Long.parseLong(initialStartId);

        log.info("Indexing Existing Items");
        rangeIndex(startId, maxId);

        log.info("Indexing Existing Items Ended. Activating the periodic indexing");
        Runnable task = () -> refreshIndex();
        ScheduledExecutorService executor = Executors
                .newScheduledThreadPool(Runtime.getRuntime().availableProcessors());
        int period = Integer.parseInt(indexingPeriod);
        executor.scheduleAtFixedRate(task, period, period, TimeUnit.MILLISECONDS);
    }

    /**
     * Add a item to the {@link #indexName}.
     *
     * @param item item to index
     */
    public void indexItem(HnItem item) {
        Index indexAction = new Index.Builder(item).index(indexName).type(HnItem.esTypeName).build();
        try {
            searchService.indexDocument(indexAction);
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

        log.info("Range Indexing Started, startId: {} | endId: {}", startId, endId);
        LongStream.rangeClosed(startId, endId).forEach(indexingId -> {
            final HnItem itemToIndex = hnApi.getItem(indexingId);

            if (itemToIndex != null && typesToindexRaw.contains(itemToIndex.getType())) {
                log.info("Indexing Item: {}", itemToIndex);
                indexItem(itemToIndex);
            } else {
                log.debug("Ignored Item: {}", itemToIndex);
            }
        });

        long stopTime = System.currentTimeMillis();
        long elapsedTime = stopTime - startTime;
        log.info("Range Indexing Ended, {} => {}. Took {}ms", startId, endId, elapsedTime);
    }

    /**
     * Search indexed items.
     *
     * @param term   The search term
     * @param sortBy Posting date sorting
     * @return An empty list if the search operation failed or received no hits.
     * @throws IOException
     */
    public List<HnItem> searchItems(String term, String sortBy) throws IOException {
        final String escapedQuery = ElasticSearchService.escapeQuery(term);
        final MultiMatchQueryBuilder multiMatchQuery = QueryBuilders.multiMatchQuery(escapedQuery, //
                HnItem.fields.by.name(), //
                HnItem.fields.text.name(), //
                HnItem.fields.title.name(), //
                HnItem.fields.type.name(), //
                HnItem.fields.url.name()); //

        final HighlightBuilder highlightBuilder = new HighlightBuilder()
                .field(HnItem.fields.text.name());

        final SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query(multiMatchQuery);
        searchSourceBuilder.sort("time", SortOrder.ASC.name().equalsIgnoreCase(sortBy) ? SortOrder.ASC : SortOrder.DESC);
        searchSourceBuilder.highlighter(highlightBuilder);

        final Search search = new Search.Builder(searchSourceBuilder.toString())//
                .addIndex(indexName)//
                .addType(HnItem.esTypeName)//
                .build();

        final SearchResult result = searchService.search(search);
        final List<Hit<HnItem, Void>> hits = result.getHits(HnItem.class);

        return hits.stream().map(h -> {
            Map<String, List<String>> highlightFields = h.highlight;
            HnItem source = h.source;
            if (highlightFields != null) {
            List<String> textHighlights = highlightFields.get(HnItem.fields.text.name());
                source.setTextHighlights(textHighlights);
            }

            return source;
        }).collect(Collectors.toList());
    }

    /**
     * Get last indexed items.
     *
     * @param size   max list size
     * @param sortBy Posting date sorting
     * @return An empty list if the index is empty.
     * @throws IOException
     */
    public List<HnItem> getLastItems(int size, String sortBy) throws IOException {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query(QueryBuilders.matchAllQuery());
        searchSourceBuilder.sort("time", SortOrder.ASC.name().equalsIgnoreCase(sortBy) ? SortOrder.ASC : SortOrder.DESC);
        searchSourceBuilder.size(size);

        Search search = new Search.Builder(searchSourceBuilder.toString())//
                .addIndex(indexName)//
                .addType(HnItem.esTypeName)//
                .build();

        SearchResult result = searchService.search(search);
        List<Hit<HnItem, Void>> hits = result.getHits(HnItem.class);
        return hits.stream().map(h -> h.source).collect(Collectors.toList());
    }

    /**
     * Get the max id of indexed items.
     *
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
                .addType(HnItem.esTypeName)//
                .build();

        SearchResult result = searchService.search(search);
        List<Hit<HnItem, Void>> hits = result.getHits(HnItem.class);
        return hits.stream().map(h -> h.source.getId()).collect(Collectors.toList()).get(0);
    }
}