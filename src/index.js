import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './app-router/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import courseReducer from './reducers/course-reducer';
import thunk from 'redux-thunk';

const courseStore = createStore(courseReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={courseStore}>
        <Router>
            <AppRouter />
        </Router>
    </Provider>, document.getElementById('root'));