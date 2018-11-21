import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
// import { getAll } from "../api/CoursesApi";
import { withRouter } from "react-router-dom";
// import axios from 'axios';

export class EditCoursePageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {},
            possibleAuthors: [],
            courseAuthors: []
        };
    }

    componentDidMount() {
        const possibleAuthors = [];
        const courseAuthors = [];
        this.setState({
            possibleAuthors,
            courseAuthors
        })
    }
    handleChange = (event, field) => {
        this.setState({
            ...this.state,
            course: {
                ...this.state.course,
                [field]: event.target.value
            }
        });
    }

    handleSave = () => {
        // updateCourse(this.state.course);
        this.props.history.push(`/courses`);
    }
    render() {
        return (
            <AppContainer>
                <EditCourse
                    course={this.state.course}
                    onChange={this.handleChange}
                    onSave={this.handleSave}
                    possibleAuthors={this.state.possibleAuthors}
                    courseAuthors={this.state.courseAuthors} />
            </AppContainer>
        );
    }
}

export const EditCoursePage = withRouter(EditCoursePageContainer);