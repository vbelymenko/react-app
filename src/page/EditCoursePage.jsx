import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
import { connect } from 'react-redux';
import { updateCourse } from '../store/courses/actions/coursesMiddleware';
import { getCourseById, updateCourseField, cleanCourse } from '../store/course/actions/courseMiddleware';
import { withRouter } from "react-router-dom";

export class EditCoursePageContainer extends Component {

    componentDidMount() {
        this.props.getCourseById(this.props.match.params.id);
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
                    cancelCourse={this.handleCancelCourse}
                    possibleAuthors={[]}
                    courseAuthors={[]} />
            </AppContainer>
        );
    }

    handleChangeCourse = (event, field) => {
        this.props.updateCourseField(field, event.target.value);
    }

    handleSaveCourse = () => {
        this.props.updateCourse(this.props.course);
        this.props.history.push(`/courses`);
    }

    handleCancelCourse = () => {
        this.props.history.push(`/courses`);
    }
}

const mapStateToProps = (state) => {
    return {
        course: state.course.courseEntity
    }
}

export const EditCoursePage = withRouter(connect(mapStateToProps, {
    getCourseById,
    updateCourseField,
    updateCourse,
    cleanCourse
})(EditCoursePageContainer));