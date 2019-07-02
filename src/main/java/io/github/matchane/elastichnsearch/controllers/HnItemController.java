/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.controllers;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.github.matchane.elastichnsearch.dtos.HnItem;
import io.github.matchane.elastichnsearch.services.HnItemService;

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

	@GetMapping("/last")
	public ResponseEntity<List<HnItem>> getLastItems(@RequestParam int size, @RequestParam String sortBy) {
		try {
			List<HnItem> searchResult = itemService.getLastItems(size, sortBy);
			return new ResponseEntity<>(searchResult, HttpStatus.OK);
		} catch (IOException e) {
			log.error(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/search")
	public ResponseEntity<List<HnItem>> searchItems(@RequestParam String term, @RequestParam String sortBy) {
		try {
			List<HnItem> searchResult = itemService.searchItems(term, sortBy);
			return new ResponseEntity<>(searchResult, HttpStatus.OK);
		} catch (IOException e) {
			log.error(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
