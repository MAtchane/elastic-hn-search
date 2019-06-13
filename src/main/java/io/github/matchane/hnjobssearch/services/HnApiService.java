/**
 * 
 */
package io.github.matchane.hnjobssearch.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import io.github.matchane.hnjobssearch.dtos.HnItem;

/**
 * Handles Hacker News API interactions.<br>
 * TODO exception handling (item not found, connection issues...).
 * 
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@Service
public class HnApiService {
	@Value("${hn.api.item}")
	private String itemApiUrl;
	@Value("${hn.api.max-id}")
	private String maxIdApiUrl;
	@Autowired
	private RestTemplate restTemplate;

	private static final Logger log = LoggerFactory.getLogger(HnApiService.class);

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	/**
	 * Get a {@link HnItem} with its Id.
	 * 
	 * @param id the item Id.
	 * @return The item as POJO
	 * @throws RestClientException
	 */
	public HnItem getItem(Long id) throws RestClientException {
		HnItem item = restTemplate.getForObject(itemApiUrl + id + ".json", HnItem.class);
		return item;
	}

	/**
	 * Get the current item max id.
	 * 
	 * @return the parsed max id
	 * @throws RestClientException
	 */
	public long getMaxItemId() throws RestClientException {
		ResponseEntity<String> maxIdResponse = restTemplate.getForEntity(maxIdApiUrl, String.class);
		String maxId = maxIdResponse.getBody();

		try {
			return Long.parseLong(maxId);
		} catch (NumberFormatException nfe) {
			log.error(nfe.getMessage());
			return 0l;
		}
	}
}
