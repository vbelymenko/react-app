import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';

export class EditCoursePage extends Component {
    render() {
        return (
            <AppContainer>
                <EditCourse />
            </AppContainer>
        );
    }
}