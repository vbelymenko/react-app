import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './HeaderApp.css';

export class HeaderApp extends Component {
    render() {
        return (
            <div className='header-root'>
                <AppBar position="static" className="navbar">
                    <Toolbar>
                        <Typography variant="display2" color="inherit" className='grow'>
                            Courses
          </Typography>
                        <Button className='login-button' color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}