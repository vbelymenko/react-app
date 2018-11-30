import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import './Navigation.css';
import PropTypes from 'prop-types';

export class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { filter: '' };
    }

    static get propTypes() {
        return {
            onAdd: PropTypes.func.isRequired,
            onFilter: PropTypes.func.isRequired
        };
    }

    handleFilterChange = (filter) => {
        this.setState({
            filter: filter
        });
    }

    render() {
        const { onFilter, onAdd } = this.props;
        return (
            <form className="container">
                <TextField
                    id="outlined-name"
                    label="Search"
                    onChange={(e) => this.handleFilterChange(e.target.value)}
                    margin="normal"
                    value={this.state.filter}
                    variant="outlined" />
                <Button size="small" onClick={() => onFilter(this.state.filter)}>
                    <Search />
                </Button>
                <Button size="small" onClick={onAdd} >
                    <Add />
                </Button>
            </form>
        )
    }
}