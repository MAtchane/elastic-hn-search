/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.services;

import io.github.matchane.elastichnsearch.ElasticHnSearchApplicationTests;
import io.github.matchane.elastichnsearch.dtos.HnItem;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.web.client.RestTemplate;

/**
 * Tests for the {@link HnApiService}
 *
 * @author Mosab ATCHANE
 * @since 0.0.3
 */
@RunWith(SpringRunner.class)
@TestPropertySource("/application.properties")
@ContextConfiguration(classes = ElasticHnSearchApplicationTests.class, loader = AnnotationConfigContextLoader.class)
public class HnApiServiceTests {

    @Rule
    public MockitoRule mockitoRule = MockitoJUnit.rule();

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    @Autowired
    private HnApiService apiService;

    private static final String HN_API_ITEM_LINK = "https://hacker-news.firebaseio.com/v0/item/";
    private static final String HN_API_MAX_ID_LINK = "https://hacker-news.firebaseio.com/v0/maxitem.json";

    @Test
    public void testGetItem() {
        long itemId = 21;
        HnItem expectedItem = new HnItem(21, "poster", 0, "A TEXT", 0, "TITLE", "story", "URL");

        Mockito.when(restTemplate.getForObject(HN_API_ITEM_LINK + itemId + ".json", HnItem.class))
                .thenReturn(expectedItem);

        Assert.assertEquals(expectedItem, apiService.getItem(itemId));
    }

    @Test
    public void testGetMaxIndexOk() {
        long expectedMaxId = 2100;

        Mockito.when(restTemplate.getForEntity(HN_API_MAX_ID_LINK, String.class))
                .thenReturn(new ResponseEntity<String>(String.valueOf(expectedMaxId), HttpStatus.OK));

        Assert.assertEquals(expectedMaxId, apiService.getMaxItemId());
    }

    @Test
    public void testgetMaxIndexKo() {
        String expectedMaxId = "invalid_id";

        Mockito.when(restTemplate.getForEntity(HN_API_MAX_ID_LINK, String.class))
                .thenReturn(new ResponseEntity<String>(expectedMaxId, HttpStatus.OK));

        Assert.assertNotEquals(expectedMaxId, apiService.getMaxItemId());
        Assert.assertEquals(0L, apiService.getMaxItemId());
    }

}
