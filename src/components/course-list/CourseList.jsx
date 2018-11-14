import React, { Component } from 'react';
import { CourseItem } from '../course-item';
const courses = [{ id: 1, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 2, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 3, name: 'video', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: 'duration', data: 'data' },
{ id: 4, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 5, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 6, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 7, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 8, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 9, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 10, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 11, name: 'video', description: 'description', duration: 'duration', data: 'data' },
{ id: 12, name: 'video', description: 'description', duration: 'duration', data: 'data' }];


export class CourseList extends Component {
    renderCourses = () => {
        return courses.map(courseItem => <CourseItem key={courseItem.id} course={courseItem} />);
    }
    render() {
        return (
            this.renderCourses()
        );
    }
}