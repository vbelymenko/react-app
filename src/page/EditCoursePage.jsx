import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
import { connect } from 'react-redux';
import { getById, updateField, update, clean } from '../store/actions/courses';
import { withRouter } from "react-router-dom";

export class EditCoursePageContainer extends Component {

    componentDidMount() {
        this.props.getById(this.props.match.params.id);
    }

    handleChange = (event, field) => {
        this.props.updateField(field, event.target.value);
    }

    handleSave = () => {
        this.props.update(this.props.course);
        this.props.history.push(`/courses`);
    }

    handleCancle = () => {
        this.props.history.push(`/courses`);
    }

    componentWillUnmount() {
        this.props.clean();
    }

    render() {
        return (
            <AppContainer>
                <EditCourse
                    course={this.props.course}
                    onChange={this.handleChange}
                    onSave={this.handleSave}
                    onCancle={this.handleCancle}
                    possibleAuthors={[]}
                    courseAuthors={[]} />
            </AppContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        course: state.course.courseEntity
    }
}

export const EditCoursePage = withRouter(connect(mapStateToProps, { getById, updateField, update, clean })(EditCoursePageContainer));