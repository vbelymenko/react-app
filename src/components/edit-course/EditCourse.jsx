import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import "./EditCourse.css";

export default class EditCourse extends Component {
    render() {
        return (
            <div className="edit-container">

                <TextField
                    id="standard-uncontrolled"
                    label="Name"
                    className="input"
                    margin="normal"
                />
                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows="4"
                    label="Description"
                    className="input"
                    margin="normal"
                />
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2017-05-24"
                    className="input"

                />
                <TextField
                    id="filled-number"
                    label="Duration"
                    type="number"
                    className="input"
                    margin="normal"
                />
                <div className="authors">
                    <List component="nav">
                        <ListItem className="list-item" button>
                            <ListItemText className="list-item-text" inset primary="Eric Hoffman1" />
                        </ListItem>
                        <ListItem className="list-item" button>
                            <ListItemText className="list-item-text" inset primary="Eric Hoffman2" />
                        </ListItem>
                        <ListItem className="list-item" button>
                            <ListItemText className="list-item-text" inset primary="Eric Hoffman3" />
                        </ListItem>
                    </List>
                    <div className="managment-course">
                        <Button variant="fab" className="edit-button" color="secondary" aria-label="Edit">
                            <ArrowForward />
                        </Button>
                        <Button variant="fab" className="delete-button" aria-label="Delete">
                            <ArrowBack />
                        </Button>
                    </div>
                    <List component="nav">
                        <ListItem className="list-item" button>
                            <ListItemText className="list-item-text" inset primary="Eric Hoffman4" />
                        </ListItem>
                        <ListItem className="list-item" button>
                            <ListItemText className="list-item-text" inset primary="Eric Hoffman5" />
                        </ListItem>
                    </List>
                </div>
                <div className="save-cancle-buttons">
                    <Button variant="contained" color="secondary" className="save-button">
                        Save
                    </Button>
                    <Button variant="contained" className="cancle-button">
                        Cancle
                    </Button>
                </div>
            </div>
        );
    }
}