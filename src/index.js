import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './app-router/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppRouter />
        </Router>
    </Provider>, document.getElementById('root'));