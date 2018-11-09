import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import './Navigation.css';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Navigation extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <form className="container">
                <TextField
                    id="outlined-name"
                    label="Search"

                    margin="normal"
                    variant="outlined" />
                <Button size="small" className={classes.button}>
                    
                    <Search className={classes.rightIcon} />
                </Button>
                <Button size="small" className={classes.button}>
                    
                    <Add className={classes.rightIcon}/>
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(Navigation);