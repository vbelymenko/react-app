import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return localStorage.user ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
        }} />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
}