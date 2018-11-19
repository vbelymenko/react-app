import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CourseItem } from '../course-item';
import { withRouter } from "react-router-dom";
import { getAllCourses } from '../../actions/course-actions';
import { allCoursesSelector } from '../../selectors/courseSelector';

class CourseListBlock extends Component {

    componentDidMount() {
        console.log("-----");
        this.props.getAllCourses();
    }

    handleEditCourseClick = (id) => {
        this.props.history.push(`courses/details/${id}`);
    }

    renderCourses = () => {
        return this.props.courses.map(courseItem =>
            <CourseItem
                key={courseItem.id}
                course={courseItem}
                handleEditCourseClick={this.handleEditCourseClick} />);
    }
    render() {
        return (
            this.renderCourses()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: allCoursesSelector(state)
    }
}

export const CourseList = withRouter(connect(mapStateToProps, { getAllCourses })(CourseListBlock));