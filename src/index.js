import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './app-router/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { coursesReducer } from './reducers/coursesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(coursesReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRouter />
        </Router>
    </Provider>, document.getElementById('root'));