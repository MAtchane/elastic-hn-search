/*
 * Copyright 2019 Mosab ATCHANE.
 */
package io.github.matchane.elastichnsearch.dtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.searchbox.annotations.JestId;

import java.util.List;

/**
 * POJO representation of a Hacker News item.
 *
 * @author Mosab ATCHANE
 * @since 0.0.1
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class HnItem {

    // TODO should respect static naming convention
    public enum fields {
        url,
        id,
        by,
        score,
        text,
        time,
        title,
        type,
    }

    @JsonIgnore
    public static final String esTypeName = "hn_item";

    @JestId
    private long id; // Using the same HN api id as a temporary fix for duplicated entries
    private String by;
    private long score;
    private String text;
    private long time; // Date parsing will be handled by the FE
    private String title;
    private String type;
    private String url;

    private List<String> textHighlights;

    public HnItem() {}

    public HnItem(long id, String by, long score, String text, long time, String title, String type, String url) {
        this.id = id;
        this.by = by;
        this.score = score;
        this.text = text;
        this.time = time;
        this.title = title;
        this.type = type;
        this.url = url;
    }

    /**
     * Return ElasticSearch index mapping for the {@link HnItem} Object.</br>
     * <i>Ignoring the text field, hosting limitations</i>
     *
     * @return the mapping JSON as String
     */
    public static String getEsMapping() {
        return "{ \"hn_item\" : " //
                + "{ \"properties\" : " //
                + "{ \"id\" : {\"type\" : \"long\", \"store\" : \"yes\"} } } " //
                + "{ \"by\" : {\"type\" : \"string\", \"store\" : \"yes\"} } } " //
                + "{ \"score\" : {\"type\" : \"long\", \"store\" : \"yes\"} } } " //
                + "{ \"time\" : {\"type\" : \"date\", \"store\" : \"yes\"} } } " //
                + "{ \"title\" : {\"type\" : \"string\", \"store\" : \"yes\"} } } " //
                + "{ \"type\" : {\"type\" : \"string\", \"store\" : \"yes\"} } } " //
                + "{ \"url\" : {\"type\" : \"string\", \"store\" : \"yes\"} } } " //
                + "}";
    }

    public String toString() {
        return "id: " + id + " | title: " + title + " | time: " + time + " | type: " + type + " | by: " + by;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBy() {
        return by;
    }

    public void setBy(String by) {
        this.by = by;
    }

    public long getScore() {
        return score;
    }

    public void setScore(long score) {
        this.score = score;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<String> getTextHighlights() {
        return textHighlights;
    }

    public void setTextHighlights(List<String> textHighlights) {
        this.textHighlights = textHighlights;
    }
}
