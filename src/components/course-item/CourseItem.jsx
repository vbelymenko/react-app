import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import './CourseItem.css';
import PropTypes from 'prop-types';


export class CourseItem extends Component {

    static get propTypes() {
        return {
            course: PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
                date: PropTypes.string,
                duration: PropTypes.number
            }).isRequired,
            removeCourse: PropTypes.func.isRequired,
            editCourse: PropTypes.func.isRequired
        };
    }

    render() {
        const { course, editCourse, removeCourse } = this.props;
        return (
            <div>
                {course ? (
                    <Card className="course">
                        <CardContent className='course-content'>
                            <div className="course-title">
                                <Typography className="course-name" gutterBottom variant="display1" component="h1">
                                    {course.title}
                                </Typography>
                                <Typography className="course-duration" gutterBottom variant="display1" component="h4">
                                    {course.duration}
                                </Typography>
                                <Typography className="course-date" gutterBottom variant="display1" component="h4">
                                    {course.date}
                                </Typography>
                            </div>

                            <Typography component="p" className="course-description">
                                {course.description}
                            </Typography>
                        </CardContent>
                        <div className='managment'>
                            <Button variant="fab" className="edit-button" onClick={() => editCourse(course.id)} color="secondary" aria-label="Edit">
                                <EditIcon />
                            </Button>
                            <Button variant="fab" className="delete-button" onClick={() => removeCourse(course.id)} aria-label="Delete">
                                <DeleteIcon />
                            </Button>
                        </div>
                    </Card>
                ) : null}
            </div>
        )
    }
}