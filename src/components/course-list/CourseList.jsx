import React, { Component } from 'react';
import { CourseItem } from '../course-item';
import PropTypes from 'prop-types';

export class CourseList extends Component {

    static get propTypes() {
        return {
            courses: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
                date: PropTypes.string,
                duration: PropTypes.number
            }).isRequired).isRequired,
            removeCourse: PropTypes.func.isRequired,
            editCourse: PropTypes.func.isRequired
        };
    }

    render() {
        return (
            this.renderCourses()
        );
    }

    renderCourses = () => {
        const { editCourse, removeCourse, courses } = this.props;
        return courses.map(courseItem =>
            <CourseItem
                key={courseItem.id}
                course={courseItem}
                removeCourse={removeCourse}
                editCourse={editCourse} />);
    }
}