import React, { Component } from "react";
import { AppContainer } from "../components/app-container";
import { CourseList } from "../components/course-list";
import { Navigation } from "../components/navigation";

export class CoursesPage extends Component {

    render() {
        return (
            <AppContainer>
                <Navigation />
                <CourseList />
            </AppContainer>
        );
    }
}