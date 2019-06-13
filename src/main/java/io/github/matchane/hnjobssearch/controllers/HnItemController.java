/**
 * 
 */
package io.github.matchane.hnjobssearch.controllers;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.matchane.hnjobssearch.dtos.HnItem;
import io.github.matchane.hnjobssearch.services.HnItemService;

/**
 * HN items controller.
 * 
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@RestController
@RequestMapping("hn/items")
public class HnItemController {
	@Autowired
	HnItemService itemService;

	private static final Logger log = LoggerFactory.getLogger(HnItemController.class);

	@GetMapping("/last")
	public ResponseEntity<List<HnItem>> getLastItems() {
		try {
			List<HnItem> searchResult = itemService.getLastItems(false, 10);
			return new ResponseEntity<>(searchResult, HttpStatus.OK);
		} catch (IOException e) {
			log.error(e.getMessage());
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
