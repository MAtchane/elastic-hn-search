/**
 * 
 */
package io.github.matchane.hnjobssearch.services;

import java.io.IOException;

import org.elasticsearch.common.inject.Inject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.searchbox.client.JestClient;
import io.searchbox.client.JestClientFactory;
import io.searchbox.client.config.HttpClientConfig;
import io.searchbox.core.Count;
import io.searchbox.core.CountResult;
import io.searchbox.core.Delete;
import io.searchbox.core.Index;
import io.searchbox.core.Search;
import io.searchbox.core.SearchResult;
import io.searchbox.indices.CreateIndex;
import io.searchbox.indices.DeleteIndex;
import io.searchbox.indices.mapping.PutMapping;

/**
 * Elastic Search service.<br>
 * A thin wrapper over the configured {@link #client}, let the caller handle the
 * operation building.<br>
 * TODO safety checks, exception handling.
 * 
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@Service
public class ElasticSearchService {
	@Autowired
	private JestClient client;

	private static final Logger log = LoggerFactory.getLogger(ElasticSearchService.class);

	@Inject
	public ElasticSearchService(@Value("${es.server.uri}") String esServerUri) {
		if (client == null) {
			client = createJestClient(esServerUri);
		}
	}

//	@Bean
//	@Scope("singleton")
	private JestClient createJestClient(String esServerUri) {
		JestClientFactory factory = new JestClientFactory();
		factory.setHttpClientConfig(new HttpClientConfig.Builder(esServerUri)//
				.multiThreaded(true)//
				.build());//

		return factory.getObject();
	}

	/**
	 * Create a new index using the provided configuration.<br>
	 * 
	 * @param indexName
	 * @param putMapping
	 * @throws IOException
	 */
	public void createIndex(String indexName, PutMapping putMapping, boolean overwrite) throws IOException {
		CountResult result = client.execute(new Count.Builder().addIndex(indexName).build());

		if (result.isSucceeded() && !overwrite) {
			log.info("Existing ES index with " + result.getCount() + " documents");
		} else {
			// need to create the index
			log.info("Creating new ES index: " + indexName);
			client.execute(new DeleteIndex.Builder(indexName).build());
			client.execute(new CreateIndex.Builder(indexName).build());
			client.execute(putMapping);
		}
	}

	/**
	 * Execute an {@link Index} action using the configured {@link #client}.
	 * 
	 * @param index
	 * @throws IOException
	 */
	public void indexDocument(Index index) throws IOException {
		client.execute(index);
	}

	/**
	 * Execute a {@link Delete} action using the configured {@link #client}.
	 * 
	 * @param delete
	 * @throws IOException
	 */
	public void deleteDocument(Delete delete) throws IOException {
		client.execute(delete);
	}

	/**
	 * Execute a {@link Search} action using the configured {@link #client}.
	 * 
	 * @param searchQuery
	 * @return
	 * @throws IOException
	 */
	public SearchResult search(Search searchQuery) throws IOException {
		return client.execute(searchQuery);
	}

}
