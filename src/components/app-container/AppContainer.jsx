import React, { Component } from 'react';
import { HeaderApp } from '../header-app';
import { FooterApp } from '../footer-app';
import "./AppContainer.css";

export class AppContainer extends Component {
    render() {
        return (
            <div className='content'>
                <HeaderApp />
                <div className='container pt-3 pb-3'>
                    {this.props.children}
                </div>
                <FooterApp />
            </div>
        )
    }
}