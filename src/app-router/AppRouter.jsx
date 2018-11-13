import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { LoginPage, CoursesPage, EditCoursePage } from '../page';



class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/edit" component={EditCoursePage} />
        <Route path="/course" component={CoursesPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default AppRouter;