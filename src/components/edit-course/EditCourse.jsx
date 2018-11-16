import React, { Component } from "react";
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import PropTypes from 'prop-types';
import "./EditCourse.css";

export class EditCourse extends Component {

    render() {
        const { course, courseAuthors, onSelectPossibleAuthors, onSelectCourseAuthors, possibleAuthors, onChange, onSave, onAdd, onRemove } = this.props;
        return (
            <div className="container-fluid d-flex flex-column">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                    </div>
                    <input type="text"
                        className="form-control"
                        name="title"
                        onChange={onChange}
                        placeholder="Title"
                        aria-label="Title"
                        value={course.title}
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea name="description"
                        className="form-control"
                        placeholder="Description"
                        aria-label="Description"
                        onChange={onChange}
                        value={course.description}></textarea>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Date</span>
                    </div>
                    <input type="text"
                        className="form-control"
                        name="date"
                        placeholder="Date"
                        type="date"
                        aria-label="Date"
                        onChange={onChange}
                        value={course.date}
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Duration</span>
                    </div>
                    <input type="text"
                        className="form-control"
                        placeholder="Duration"
                        name="duration"
                        type="number"
                        min="0"
                        onChange={onChange}
                        aria-label="Duration"
                        value={course.duration}
                        aria-describedby="basic-addon1" />
                </div>

                <div className="authors d-flex justify-content-between">

                    <ul className="possible-authors-list pl-0 m-0 w-25 float-left">
                        {
                            possibleAuthors.map((author) =>
                                <button
                                    onClick={onSelectPossibleAuthors}
                                    key={author.id}
                                    id={author.id}
                                    type="button"
                                    className={`list-group-item w-100 ${author.isSelected ? 'selected' : ''}`} >{author.name}</button>)
                        }
                    </ul>

                    <div className="managment-course d-flex flex-column">
                        <div className="h-50 d-flex align-items-center">
                            <button onClick={onAdd} className="btn btn-secondary" color="secondary">
                                <ArrowForward />
                            </button>
                        </div>
                        <div className="h-50 d-flex align-items-center">
                            <button onClick={onRemove} className="btn btn-secondary">
                                <ArrowBack />
                            </button>
                        </div>
                    </div>
                    <ul className="course-authors-list pl-0 m-0 w-25 float-right">
                        {
                            courseAuthors.map((author) =>
                                <button onClick={onSelectCourseAuthors}
                                    key={author.id}
                                    id={author.id} type="button"
                                    className={`list-group-item w-100 ${author.isSelected ? 'selected' : ''}`} >{author.name}</button>)
                        }
                    </ul>
                </div>
                <div className="d-flex justify-content-around m-3">
                    <button onClick={onSave} className="btn btn-info btn-lg">
                        Save
                    </button>
                    <button className="btn btn-danger btn-lg">
                        Cancle
                    </button>
                </div>
            </div>
        );
    }
}

EditCourse.propTypes = {
    course: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    }).isRequired,

    onChange: PropTypes.func.isRequired,
    courseAuthors: PropTypes.arrayOf(PropTypes.shape({

    }).isRequired).isRequired,
    possibleAuthors: PropTypes.arrayOf(PropTypes.shape({

    }).isRequired).isRequired,

}