import React, { Component } from 'react';
import { CourseItem } from '../course-item';
import { withRouter } from "react-router-dom";
import listCoursesWrapper from '../../hoc/ListCoursesWrapper';


class CourseListBlock extends Component {

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleRemoveCourseClick = (id) => {
        const { remove } = this.props;
        remove(id);
    }

    renderCourses = () => {
        const { data } = this.props;
        return data.map(courseItem =>
            <CourseItem
                key={courseItem.id}
                course={courseItem}
                handleRemoveCourseClick={this.handleRemoveCourseClick}
                handleEditCourseClick={this.handleEditCourseClick} />);
    }
    render() {
        return (
            this.renderCourses()
        );
    }
}
const CourseListWithRouter = withRouter(CourseListBlock);
export const CourseList = listCoursesWrapper(CourseListWithRouter, 'http://localhost:8080/courses');