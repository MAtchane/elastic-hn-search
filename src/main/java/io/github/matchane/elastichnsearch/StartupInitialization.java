package io.github.matchane.elastichnsearch;

import io.github.matchane.elastichnsearch.services.HnItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * Handles the app initializers.<br>
 * TODO retry on failure?
 */
@Component
class StartupInitialization {

    @Autowired
    private HnItemService itemService;

    private static final Logger log = LoggerFactory.getLogger(StartupInitialization.class);

//    @EventListener(ApplicationReadyEvent.class)
    public void initItemsIndex() {
        try {
            itemService.initIndex();
        } catch (IOException e) {
            log.error(e.getMessage());
        }
    }

}
