/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.services;

import io.searchbox.client.JestClient;
import io.searchbox.client.JestClientFactory;
import io.searchbox.client.config.HttpClientConfig;
import io.searchbox.core.*;
import io.searchbox.indices.CreateIndex;
import io.searchbox.indices.DeleteIndex;
import io.searchbox.indices.mapping.PutMapping;
import org.elasticsearch.common.inject.Inject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Elastic Search service.<br>
 * A thin wrapper over the configured {@link #client}, let the caller handle the
 * operation building.<br>
 * TODO safety checks, exception handling & externalized client configuration.
 *
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@Service
class ElasticSearchService {

    private static JestClient client;

    private static final Logger log = LoggerFactory.getLogger(ElasticSearchService.class);

    @Inject
    private ElasticSearchService(@Value("${es.server.uri}") String esServerUri, @Value("${es.server.key}") String apiKey) {
        if (client == null) {
            log.info("Configured ES ServerUri {}", esServerUri);
            initJestClient(esServerUri, apiKey);
        }
    }

    private static JestClient initJestClient(String esServerUri, String apiKey) {
        JestClientFactory factory = new JestClientFactory();
        factory.setHttpClientConfig(new HttpClientConfig.Builder(esServerUri)//
                .defaultCredentials("apikey", apiKey)
                .multiThreaded(true)//
                .build());//

        return factory.getObject();
    }

    /**
     * Create a new index using the provided configuration.<br>
     *
     * @param indexName  ElasticSearch index name
     * @param putMapping The index mapping
     * @throws IOException
     */
    public void createIndex(String indexName, PutMapping putMapping, boolean overwrite) throws IOException {
        CountResult result = client.execute(new Count.Builder().addIndex(indexName).build());

        if (result.isSucceeded() && !overwrite) {
            log.info("Existing ES index with {} documents", result.getCount());
        } else {
            // need to create the index
            log.info("Creating new ES index: {]", indexName);
            client.execute(new DeleteIndex.Builder(indexName).build());
            client.execute(new CreateIndex.Builder(indexName).build());
            client.execute(putMapping);
        }
    }

    /**
     * Execute an {@link Index} action using the configured {@link #client}.
     *
     * @param index action to execute
     * @throws IOException
     */
    public void indexDocument(Index index) throws IOException {
        client.execute(index);
    }

    /**
     * Execute a {@link Delete} action using the configured {@link #client}.
     *
     * @param delete action to execute
     * @throws IOException
     */
    public void deleteDocument(Delete delete) throws IOException {
        client.execute(delete);
    }

    /**
     * Execute a {@link Search} action using the configured {@link #client}.
     *
     * @param searchQuery Search query object
     * @return search result object
     * @throws IOException
     */
    public SearchResult search(Search searchQuery) throws IOException {
        return client.execute(searchQuery);
    }

    /**
     * Escape an Elastic Search query.<br>
     * Characters escaped: {@code + - = && || > < ! ( ) { } [ ] ^ " ~ * ? : \ /}
     *
     * @param query to escape
     * @return the escaped query
     * @see "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html"
     */
    public static String escapeQuery(String query) {
        query = query.replaceAll("[\\+\\-=\\!\\(\\){}\\[\\]^\\\"~\\*\\?\\:\\\\\\/]", "\\\\\\\\$0");
        query = query.replaceAll("[><]", ""); // < and > can’t be escaped at all.
        query = query.replaceAll("\\|\\|", "\\\\\\\\||"); // replace ||
        query = query.replaceAll("\\&\\&", "\\\\\\\\&&"); // replace &&
        query = query.replaceAll("AND", "and"); // replace AND
        query = query.replaceAll("OR", "or"); // replace OR
        query = query.replaceAll("NOT", "not"); // replace NOT
        return query;
    }

}
