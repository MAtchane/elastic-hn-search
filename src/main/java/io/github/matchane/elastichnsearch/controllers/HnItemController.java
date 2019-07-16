/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.controllers;

import io.github.matchane.elastichnsearch.dtos.HnItem;
import io.github.matchane.elastichnsearch.services.HnItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * HN items controller.
 *
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@RestController
@RequestMapping("/api/v1/hn/items")
class HnItemController {
    @Autowired
    private HnItemService itemService;

    private static final Logger log = LoggerFactory.getLogger(HnItemController.class);

    @GetMapping(path = "/last", params = {"page", "size", "sortBy"}, produces = "application/json")
    public ResponseEntity<PagedResources<HnItem>> getLastItems(@RequestParam int page, @RequestParam int size, @RequestParam String sortBy) {
        try {
            return new ResponseEntity<>(itemService.getLastItemsPaged(page, size, sortBy), HttpStatus.OK);
        } catch (IOException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/search", params = {"page", "size", "term", "sortBy"}, produces = "application/json")
    public ResponseEntity<PagedResources<HnItem>> searchItems(@RequestParam int page, @RequestParam int size, @RequestParam String term, @RequestParam String sortBy) {
        try {
            return new ResponseEntity<>(itemService.searchItemsPaged(page, size, term, sortBy), HttpStatus.OK);
        } catch (IOException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
