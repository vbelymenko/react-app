import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { CourseList } from '../components/course-list';
import { Navigation } from '../components/navigation';
import { withRouter } from 'react-router-dom';
import { coursesSelector } from '../store/courses/selectors/coursesSelector'
import { connect } from 'react-redux';
import { removeCourse, getAllCourses, updateCourseFilter, cleanCourseFilter, fetchMoreCourses } from '../store/courses/actions/coursesMiddleware';

class CoursesContainer extends Component {

    componentDidMount() {
        this.props.fetchMoreCourses(0, 10);
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
                    hasMore={this.props.hasMore}
                    removeCourse={this.handleRemoveCourse}
                    fetchMoreCourses={this.handleFetchMoreCourses}
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

    handleFetchMoreCourses = () => {
        this.props.fetchMoreCourses(11, 20);
    }

    handleFilterCourses = (filter) => {
        this.props.updateCourseFilter(filter);
    }
}

const mapStateToProps = (state) => {
    return {
        courses: coursesSelector(state),
        hasMore: state.courses.hasMore
    };
}

export const CoursesPage = withRouter(connect(mapStateToProps, {
    getAllCourses,
    removeCourse,
    updateCourseFilter,
    cleanCourseFilter,
    fetchMoreCourses
})(CoursesContainer));