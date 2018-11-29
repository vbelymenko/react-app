import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
import { getDefault, updateField, create, clean } from '../store/actions/courses';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

export class CreateCoursePageContainer extends Component {

    componentDidMount() {
        this.props.getDefault();
    }

    componentWillUnmount() {
        this.props.clean();
    }

    handleChange = (event, field) => {
        this.props.updateField(field, event.target.value);
    }

    handleSave = () => {
        this.props.create(this.props.course);
        this.props.history.push(`/courses`);
    }

    handleCancle = () => {
        this.props.history.push(`/courses`);
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

export const CreateCoursePage = withRouter(connect(mapStateToProps, { getDefault, updateField, create, clean })(CreateCoursePageContainer));