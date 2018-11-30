import React, { Component } from "react";
import { AppContainer } from "../components/app-container";
import { CourseList } from "../components/course-list";
import { Navigation } from "../components/navigation";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { remove, getAll, updateFilter, cleanFilter } from '../store/actions/courses';

class CoursesContainer extends Component {

    componentDidMount() {
        this.props.getAll();
    }

    componentWillUnmount(){
        this.props.cleanFilter();
    }

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    handleAddCourseClick = () => {
        this.props.history.push('courses/new');
    }

    handleRemoveCourseClick = (id) => {
        this.props.remove(id);
    }

    handleFilterClick = (filter) => {
        this.props.updateFilter(filter);
    }

    render() {
        return (
            <AppContainer>
                <Navigation onChange={this.handleFilterChange}
                    onFilter={this.handleFilterClick}
                    onAdd={this.handleAddCourseClick} />
                <CourseList courses={this.props.courses}
                    onRemove={this.handleRemoveCourseClick}
                    onEdit={this.handleEditCourseClick} />
            </AppContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.coursesList.filter(course=> course.title.includes(state.courses.filter))
    };
}

export const CoursesPage = withRouter(connect(mapStateToProps, { getAll, remove, updateFilter, cleanFilter })(CoursesContainer));