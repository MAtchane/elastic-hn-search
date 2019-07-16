/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.services;

import io.github.matchane.elastichnsearch.dtos.HnItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Handles Hacker News API interactions.<br>
 * TODO exception handling (item not found, connection issues...).
 *
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@Service
class HnApiService {
    @Value("${hn.api.item}")
    private String itemApiUrl;
    @Value("${hn.api.max-id}")
    private String maxIdApiUrl;
    @Autowired
    private RestTemplate restTemplate;

    private static final Logger log = LoggerFactory.getLogger(HnApiService.class);

    /**
     * Get a {@link HnItem} with its Id.
     *
     * @param id the item Id
     * @return the item as POJO
     */
    public HnItem getItem(Long id) {
        return restTemplate.getForObject(itemApiUrl + id + ".json", HnItem.class);
    }

    /**
     * Get the current item max id.
     *
     * @return the parsed max id, 0L on invalid ones
     */
    public long getMaxItemId() {
        ResponseEntity<String> maxIdResponse = restTemplate.getForEntity(maxIdApiUrl, String.class);
        String maxId = maxIdResponse.getBody();

        if (maxId != null) {
            try {
                return Long.parseLong(maxId);
            } catch (NumberFormatException nfe) {
                log.error(nfe.getMessage());
                return 0L;
            }
        } else {
            return 0L;
        }
    }
}
