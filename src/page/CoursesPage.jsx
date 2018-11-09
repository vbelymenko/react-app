import React, { Component } from "react";
import AppContainer from "../components/app-container/AppContainer";
import Course from "../components/course-list/Course";
import Navigation from "../components/navigation/Navigation";
const courses = [{ id: 1, name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' },{ name: 'video', description: 'description', duration: 'duration', data: 'data' }];

export default class CoursesPage extends Component {
    renderCourses = () => {
        return courses.map(i => <Course handleClick={this.handleClick} course={i} />)
    }

    handleClick = id => {
        console.log(id);
    }
    render() {
        return (
            <AppContainer>
                <Navigation/>
                {this.renderCourses()}
            </AppContainer>
        );
    }
}