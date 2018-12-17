package com.belymenko.courses.service;

import com.belymenko.courses.model.Course;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class CourseService {
    private long id;
    private Map<Long, Course> courses = new HashMap<>();

    {
        for (long i = 1; i < 100; i++) {
            courses.put(i, new Course(i, "Title1", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        }
        id = courses.size();
    }

    public Course create(Course course) {
        id = ++id;
        course.setId(id);
        course.setAuthorIds(Collections.emptyList());
        courses.put(id, course);
        return course;
    }

    public Long delete(Long id) {
        courses.remove(id);
        return id;
    }

    public Course update(Course course) {
        courses.replace(course.getId(), course);
        return course;
    }

    public Course get(Long id) {
        return courses.get(id);
    }

    public List<Course> getAll() {
        return courses.entrySet().stream().map(Map.Entry::getValue).collect(Collectors.toList());
    }

    public List<Course> getChunk(Integer page, Integer offset) {
        return courses.entrySet().stream().map(Map.Entry::getValue).collect(Collectors.toList()).subList(page, page + offset);
    }
}
