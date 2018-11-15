import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, CoursesPage, EditCoursePage, CreateCoursePage } from '../page';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/courses/new" component={CreateCoursePage} />
          <Route path="/courses/details/:id" component={EditCoursePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;