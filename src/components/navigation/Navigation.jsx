import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import './Navigation.css';
import PropTypes from 'prop-types';

export class Navigation extends React.Component {

    static get propTypes() {
        return {
            addCourse: PropTypes.func.isRequired,
            filterCourses: PropTypes.func.isRequired
        };
    }

    constructor(props) {
        super(props);
        this.state = { filter: '' };
    }

    render() {
        const { addCourse, filterCourses } = this.props;
        return (
            <form className="container">
                <TextField
                    id="outlined-name"
                    label="Search"
                    onChange={(e) => this.handleFilterChange(e.target.value)}
                    margin="normal"
                    value={this.state.filter}
                    variant="outlined" />
                <Button size="small" onClick={() => filterCourses(this.state.filter)}>
                    <Search />
                </Button>
                <Button size="small" onClick={addCourse} >
                    <Add />
                </Button>
            </form>
        )
    }

    handleFilterChange = (filter) => {
        this.setState({
            filter: filter
        });
    }
}