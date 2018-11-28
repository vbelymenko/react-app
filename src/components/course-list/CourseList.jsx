import React, { Component } from 'react';
import { CourseItem } from '../course-item';

export class CourseList extends Component {


    renderCourses = () => {
        const { onRemove, onEdit, courses } = this.props;
        return courses.map(courseItem =>
            <CourseItem
                key={courseItem.id}
                course={courseItem}
                onRemove={onRemove}
                onEdit={onEdit} />);
    }
    render() {
        return (
            this.renderCourses()
        );
    }
}