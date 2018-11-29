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
    private Map<Long, Course> courses = new HashMap<>();

    {
        courses.put(1L, new Course(1L, "Title1", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(2L, new Course(2L, "Title2", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(3L, new Course(3L, "Title3", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(4L, new Course(4L, "Title4", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(5L, new Course(5L, "Title1", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(6L, new Course(6L, "Title2", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(7L, new Course(7L, "Title3", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(8L, new Course(8L, "Title4", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
        courses.put(9L, new Course(9L, "Title5", "Description1", 1L, Arrays.asList(1L, 2L, 3L), "2000-01-01"));
    }

    public Course create(Course course) {
        long id = courses.size() + 1;
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
}
