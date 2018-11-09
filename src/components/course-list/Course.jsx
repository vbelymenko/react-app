import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography'
import './Course.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


class Course extends React.Component {

    onClick = () =>{
        const { course, handleClick } = this.props;
        handleClick(course.id);
    }
    render() {
        const { course, handleClick } = this.props;
        return (
            <div>
                {course ? (
                    <Card className="course">
                        <CardContent className='course-content'>
                            <div className="course-title">
                                <Typography className="course-name" gutterBottom variant="h1" component="h1">
                                    {course.name}
                                </Typography>
                                <Typography className="course-duration" gutterBottom variant="h4" component="h4">
                                    {course.duration}
                                </Typography>
                                <Typography className="course-date" gutterBottom variant="h4" component="h4">
                                    {course.data}
                                </Typography>
                            </div>

                            <Typography component="p" className="course-description">
                                {course.description}
                            </Typography>
                        </CardContent>
                        <div className='managment'>
                            <Button variant="fab" onClick={this.onClick} className="edit-button" color="secondary" aria-label="Edit">
                                <EditIcon />
                            </Button>
                            <Button variant="fab" className="delete-button" aria-label="Delete">
                                <DeleteIcon />
                            </Button>
                        </div>
                    </Card>
                ) : null}
            </div>
        )
    }
}
export default withStyles(styles)(Course);