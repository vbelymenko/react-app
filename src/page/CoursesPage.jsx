import React, { Component } from "react";
import { AppContainer } from "../components/app-container";
import { CourseList } from "../components/course-list";
import { Navigation } from "../components/navigation";

export class CoursesPage extends Component {


    handleClick = id => {
        this.props.history.push(`/edit/${id}`);
    }
    render() {
        return (
            <AppContainer>
                <Navigation />
                <CourseList/>
            </AppContainer>
        );
    }
}