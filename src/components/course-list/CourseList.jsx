import React, { Component } from 'react';
import { CourseItem } from '../course-item';
import { getAll } from "../../db/db";


export class CourseList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        };
    }

    componentDidMount() {
        const courses = getAll();
        this.setState({
            courses
        })
    }

    handleEditCourseClick = id => {
        this.props.history.push(`/edit/${id}`);
    }

    renderCourses = () => {
        return this.state.courses.map(courseItem => <CourseItem key={courseItem.id} course={courseItem} handleEditCourseClick={this.handleEditCourseClick}/>);
    }
    render() {
        return (
            this.renderCourses()
        );
    }
}