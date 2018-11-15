import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
import { getPossibleAuthors, createCourse } from "../db/db";
import { withRouter } from "react-router-dom";

export class CreateCoursePageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {},
            possibleAuthors: [],
            courseAuthors: []
        };
    }

    componentDidMount() {
        const course = { title: "", authorIds: [], description: '', duration: '', date: '2000-01-01' };
        const possibleAuthors = getPossibleAuthors([]);
        const courseAuthors = course.authorIds;
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
        createCourse(this.state.course);
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

export const CreateCoursePage = withRouter(CreateCoursePageContainer);