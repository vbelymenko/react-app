import React, { Component } from 'react';
import { CourseItem } from '../course-item';
import { withRouter } from "react-router-dom";
import { getAll } from "../../api/CoursesApi";


class CourseListBlock extends Component {

    state = {
        data: []
    }

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleRemoveCourseClick = (id) => {
        const { remove } = this.props;
        remove(id);
    }

    renderCourses = () => {
        getAll()
            .then(courses => this.setState({ data: courses }));
        return this.state.data.map(courseItem =>
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
export const CourseList = withRouter(CourseListBlock);