import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
import { getDefaultCourse, updateCourseField, cleanCourse } from '../store/course/actions/courseMiddleware';
import { createCourse } from '../store/courses/actions/coursesMiddleware';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

export class CreateCoursePageContainer extends Component {

    componentDidMount() {
        this.props.getDefaultCourse();
    }

    componentWillUnmount() {
        this.props.cleanCourse();
    }

    render() {
        return (
            <AppContainer>
                <EditCourse
                    course={this.props.course}
                    changeCourse={this.handleChangeCourse}
                    saveCourse={this.handleSaveCourse}
                    cancelCourse={this.handleCancleCourse}
                    possibleAuthors={[]}
                    courseAuthors={[]} />
            </AppContainer>
        );
    }

    handleChangeCourse = (event, field) => {
        this.props.updateCourseField(field, event.target.value);
    }

    handleSaveCourse = () => {
        this.props.createCourse(this.props.course);
        this.props.history.push(`/courses`);
    }

    handleCancleCourse = () => {
        this.props.history.push(`/courses`);
    }
}

const mapStateToProps = (state) => {
    return {
        course: state.course.courseEntity
    }
}

export const CreateCoursePage = withRouter(connect(mapStateToProps, {
    getDefaultCourse,
    updateCourseField,
    createCourse,
    cleanCourse
})(CreateCoursePageContainer));