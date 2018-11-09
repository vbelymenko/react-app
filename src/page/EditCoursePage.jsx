import React, { Component } from "react";
import AppContainer from "../components/app-container/AppContainer";
import EditCourse from "../components/edit-course/EditCourse";

export default class LoginPage extends Component {
    render() {
        return (
            <AppContainer>
                <EditCourse/>
            </AppContainer>
        );
    }
}