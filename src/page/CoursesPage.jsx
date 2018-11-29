import React, { Component } from "react";
import { AppContainer } from "../components/app-container";
import { CourseList } from "../components/course-list";
import { Navigation } from "../components/navigation";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { remove, getAll } from '../store/actions/courses';

class CoursesContainer extends Component {

    componentDidMount() {
        this.props.getAll();
    }

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleRemoveCourseClick = (id) => {
        this.props.remove(id);
    }

    render() {
        return (
            <AppContainer>
                <Navigation />
                <CourseList courses={this.props.courses}
                    onRemove={this.handleRemoveCourseClick}
                    onEdit={this.handleEditCourseClick} />
            </AppContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.coursesList
    };
}

export const CoursesPage = withRouter(connect(mapStateToProps, { getAll, remove })(CoursesContainer));