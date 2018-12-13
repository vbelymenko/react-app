import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './HeaderApp.css';

export class HeaderAppContainer extends Component {


    state = {
        isLoggedIn: false
    };

    componentDidMount() {
        this.setState({
            isLoggedIn: localStorage.getItem('user') ? true : false
        });
    }

    handleLogoutClick = () => {
        localStorage.removeItem('user');
        this.props.history.push(`/courses`);
    }

    render() {
        return (
            <div className='header-root'>
                <AppBar position="static" className="navbar">
                    <Toolbar>
                        <Typography variant="display2" color="inherit" className='grow'>
                            Courses
          </Typography>
                        {this.state.isLoggedIn ?
                            <Button className='login-button' onClick={this.handleLogoutClick} color="inherit">Logout</Button> :
                            <Link to={'/login'}><Button className='login-button' color="inherit">Login</Button></Link>}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export const HeaderApp = withRouter(HeaderAppContainer);