import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, CoursesPage, EditCoursePage, CreateCoursePage } from '../page';
import { PrivateRoute } from '../hoc/PrivateRouter';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/courses/new" component={CreateCoursePage} />
          <PrivateRoute path="/courses/details/:id" component={EditCoursePage} />
          <PrivateRoute path="/courses" component={CoursesPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;