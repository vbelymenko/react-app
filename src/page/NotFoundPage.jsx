import React, { Component } from "react";
import { AppContainer } from "../components/app-container";

export class NotFoundPage extends Component {

    render() {
        return (
            <AppContainer>
                <div className="d-flex justify-content-center"><label className="display-1">NOT FOUND</label></div>
            </AppContainer>
        );
    }
}