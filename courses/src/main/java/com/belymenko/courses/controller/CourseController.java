package com.belymenko.courses.controller;

import com.belymenko.courses.model.Course;
import com.belymenko.courses.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @RequestMapping(method = RequestMethod.POST)
    public Course create(Course course) {
        return courseService.create(course);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Course update(Course course) {
        return courseService.update(course);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public Long delete(@PathVariable("id") Long id) {
        return courseService.delete(id);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Course get(@PathVariable("id") Long id) {
        return courseService.get(id);
    }


    @RequestMapping(method = RequestMethod.GET)
    public List<Course> getAll() {
        return courseService.getAll();
    }
}
