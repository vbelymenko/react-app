import React, { Component } from "react";
import { AppContainer } from "../components/app-container";
import { CourseList } from "../components/course-list";
import { Navigation } from "../components/navigation";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { removeCourse, getAllCourses, updateCourseFilter, cleanCourseFilter } from '../store/actions/courses';

class CoursesContainer extends Component {

    componentDidMount() {
        this.props.getAllCourses();
    }

    componentWillUnmount() {
        this.props.cleanCourseFilter();
    }

    render() {
        return (
            <AppContainer>
                <Navigation filterCourses={this.handleFilterCourses}
                    addCourse={this.handleAddCourse} />
                <CourseList courses={this.props.courses}
                    removeCourse={this.handleRemoveCourse}
                    editCourse={this.handleEditCourse} />
            </AppContainer>
        );
    }

    handleEditCourse = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleAddCourse = () => {
        this.props.history.push('courses/new');
    }

    handleRemoveCourse = (id) => {
        this.props.removeCourse(id);
    }

    handleFilterCourses = (filter) => {
        this.props.updateCourseFilter(filter);
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.coursesList.filter(course => course.title.includes(state.courses.filter))
    };
}

export const CoursesPage = withRouter(connect(mapStateToProps, {
    getAllCourses,
    removeCourse,
    updateCourseFilter,
    cleanCourseFilter
})(CoursesContainer));