import React, { Component } from 'react';
import { AppContainer } from '../components/app-container/';
import { LoginForm } from '../components/login-form';

export class LoginPage extends Component {
    render() {
        return (
            <AppContainer>
                <LoginForm />
            </AppContainer>
        );
    }
}