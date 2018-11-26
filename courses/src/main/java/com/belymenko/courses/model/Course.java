package com.belymenko.courses.model;

import java.util.List;

public class Course {
    private Long id;
    private String title;
    private String description;
    private int duration;
    private List<Long> authorIds;
    private String date;

    public Course(Long id, String title, String description, int duration, List<Long> authorIds, String date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.authorIds = authorIds;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public List<Long> getAuthorIds() {
        return authorIds;
    }

    public void setAuthorIds(List<Long> authorIds) {
        this.authorIds = authorIds;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
