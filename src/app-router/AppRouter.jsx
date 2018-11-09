import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../page/LoginPage';
import CoursesPage from '../page/CoursesPage';
import EditCoursePage from '../page/EditCoursePage';



class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/edit" component={EditCoursePage}/>
        <Route path="/course" component={CoursesPage}/>
        <Route path="/login" component={LoginPage}/>
      </div>
    );
  }
}

export default AppRouter;