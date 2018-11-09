import React, { Component } from "react";
import AppContainer from "../components/app-container/AppContainer";
import Course from "../components/course-list/Course";
import Navigation from "../components/navigation/Navigation";
import { getAll } from "../db/db";
import { withRouter } from "react-router-dom";

class CoursesPage extends Component {
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

    renderCourses = () => {
        return this.state.courses.map(i => <Course handleClick={this.handleClick} course={i} />)
    }

    handleClick = id => {
        this.props.history.push(`/edit/${id}`);
    }
    render() {
        return (
            <AppContainer>
                <Navigation />
                {this.renderCourses()}
            </AppContainer>
        );
    }
}

export default withRouter(CoursesPage);