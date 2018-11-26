import React, { Component } from 'react';
import { CourseItem } from '../course-item';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getAll, remove } from '../../api/CoursesApi';
import { getCoursesSuccess } from '../../actions/courseActions';


class CourseListBlock extends Component {

    componentDidMount(){
        this.props.dispatch(getCoursesSuccess([]));
    }

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleRemoveCourseClick = (id) => {
        remove(id);
    }

    renderCourses = () => {
        return this.props.courses.map(courseItem =>
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
const mapStateToProps = (store) => {
    return {
        courses: store.courses
    };
}

export const CourseList = withRouter(connect(mapStateToProps)(CourseListBlock));