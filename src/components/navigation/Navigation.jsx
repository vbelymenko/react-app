import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import './Navigation.css';

export class Navigation extends React.Component {

    render() {
        return (
            <form className="container">
                <TextField
                    id="outlined-name"
                    label="Search"

                    margin="normal"
                    variant="outlined" />
                <Button size="small" >

                    <Search/>
                </Button>
                <Button size="small" >

                    <Add/>
                </Button>
            </form>
        )
    }
}