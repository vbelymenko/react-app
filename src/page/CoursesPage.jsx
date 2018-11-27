import React, { Component } from "react";
import { AppContainer } from "../components/app-container";
import { CourseList } from "../components/course-list";
import { Navigation } from "../components/navigation";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getAll, remove } from '../actions/courses';

export class CoursesContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getAll());
    }

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleRemoveCourseClick = (id) => {
        remove(id);
        this.props.dispatch(remove(id))
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

const mapStateToProps = (store) => {
    return {
        courses: store.coursesReducer.courses
    };
}

export const CoursesPage = withRouter(connect(mapStateToProps)(CoursesContainer));