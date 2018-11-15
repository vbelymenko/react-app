import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
import { getCourseById, getPossibleAuthors, getCourseAuthors, updateCourse } from "../db/db";
import { withRouter } from "react-router-dom";

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
        const course = getCourseById(this.props.match.params.id);
        const possibleAuthors = getPossibleAuthors(course.authorIds);
        const courseAuthors = getCourseAuthors(course.authorIds);
        this.setState({
            course,
            possibleAuthors,
            courseAuthors
        })
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            course: {
                ...this.state.course,
                [event.target.name]: event.target.value
            }
        });
    }

    handleSave = () => {
        updateCourse(this.state.course);
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