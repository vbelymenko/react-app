import React, { Component, Fragment } from 'react';
import { HeaderApp } from '../header-app';
import { FooterApp } from '../footer-app';
import "./AppContainer.css";

export class AppContainer extends Component {
    render() {
        return (
            <Fragment>
                <div className='content'>
                    <HeaderApp />
                    <div className='container'>
                        {this.props.children}
                    </div>
                    <FooterApp />
                </div>
            </Fragment>
        )
    }
}