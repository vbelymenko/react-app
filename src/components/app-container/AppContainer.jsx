import React, { Component, Fragment } from 'react';
import HeaderApp from '../header/Header';
import FooterApp from '../footer/Footer';
import "./AppContainer.css";

export default class AppContainer extends Component {
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