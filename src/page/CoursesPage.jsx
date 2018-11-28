import React, { Component } from "react";
import { AppContainer } from "../components/app-container";
import { CourseList } from "../components/course-list";
import { Navigation } from "../components/navigation";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/courses';

class CoursesContainer extends Component {

    componentDidMount() {
        this.props.actions.getAll();
    }

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleRemoveCourseClick = (id) => {
        this.props.actions.remove(id);
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

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const CoursesPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(CoursesContainer));