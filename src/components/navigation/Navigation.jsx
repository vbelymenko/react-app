import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import './Navigation.css';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component {

    render() {
        const { onChange, onFilter } = this.props;
        return (
            <form className="container">
                <TextField
                    id="outlined-name"
                    label="Search"
                    onChange={(e) => onChange(e.target.value)}
                    margin="normal"
                    variant="outlined" />
                <Button size="small" onClick={onFilter}>
                    <Search />
                </Button>
                <Button size="small" >
                    <Link to={'courses/new'}><Add /></Link>
                </Button>
            </form>
        )
    }
}