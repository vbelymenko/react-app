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
            onRemove: PropTypes.func.isRequired,
            onEdit: PropTypes.func.isRequired
        };
    }

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