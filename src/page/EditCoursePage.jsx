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

    handleAddAuthor = (event) => {
        const courseAuthors = this.state.courseAuthors;
        const possibleAuthors = this.state.possibleAuthors;
        possibleAuthors.map(elem => {
            debugger
            if (elem.isSelected === true) {
                debugger
                elem = {
                    ...elem,
                    isSelected: !elem.isSelected
                }
                courseAuthors.push(elem);
            }
            return elem;
        })
        this.setState({
            courseAuthors,
            possibleAuthors: possibleAuthors.filter((author) =>
                !courseAuthors.includes(author)
            )
        }
        );
    }

    handleRemoveAuthor = (event) => {
        console.log(event.target.value);
    }

    handleSave = () => {
        updateCourse(this.state.course);
        this.props.history.push(`/courses`);
    }

    handleSelectCourseAuthors = (event) => {
        const courseAuthors = this.state.courseAuthors;
        const authors = courseAuthors.map(elem => {
            const id = parseInt(event.target.id, 10);
            if (elem.id === id) {
                elem = {
                    ...elem,
                    isSelected: !elem.isSelected
                }
            }
            return elem;
        })
        this.setState({ courseAuthors: authors });
    }

    handleSelectPossibleAuthors = (event) => {
        const possibleAuthors = this.state.possibleAuthors;
        const authors = possibleAuthors.map(elem => {
            const id = parseInt(event.target.id, 10);
            if (elem.id === id) {
                elem = {
                    ...elem,
                    isSelected: !elem.isSelected
                }
            }
            return elem;
        })
        this.setState({ possibleAuthors: authors });
    }
    render() {
        return (
            <AppContainer>
                <EditCourse
                    course={this.state.course}
                    onChange={this.handleChange}
                    onSave={this.handleSave}
                    onAdd={this.handleAddAuthor}
                    onRemove={this.handleRemoveAuthor}
                    onSelectPossibleAuthors={this.handleSelectPossibleAuthors}
                    onSelectCourseAuthors={this.handleSelectCourseAuthors}
                    possibleAuthors={this.state.possibleAuthors}
                    courseAuthors={this.state.courseAuthors} />
            </AppContainer>
        );
    }
}

export const EditCoursePage = withRouter(EditCoursePageContainer);