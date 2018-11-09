import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Header.css';

class HeaderApp extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className='header-root'>
                <AppBar position="static" className="navbar">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className='grow'>
                            Courses
          </Typography>
                        <Button className='login-button' color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default (HeaderApp);