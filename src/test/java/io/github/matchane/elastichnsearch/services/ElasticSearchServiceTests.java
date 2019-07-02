/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.services;

import org.junit.Assert;
import org.junit.Test;

/**
 * Tests for the {@link ElasticSearchService}
 *
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
public class ElasticSearchServiceTests {

    @Test
    public void testQueryEscaper() {
        Assert.assertEquals("\\\\+ \\\\- \\\\= \\\\&& \\\\||   \\\\! \\\\( \\\\) \\\\{ \\\\} \\\\[ \\\\] \\\\^ \\\\\" \\\\~ \\\\* \\\\? \\\\: \\\\\\ \\\\/", ElasticSearchService.escapeQuery("+ - = && || > < ! ( ) { } [ ] ^ \" ~ * ? : \\ /"));
        Assert.assertEquals("and there\\\\! are\\\\? or \\\\(lots of\\\\) char\\\\*cters 2 \\\\^escape\\\\! not", ElasticSearchService.escapeQuery("AND there! are? OR (lots of) char*cters 2 ^escape! NOT"));
    }
}
