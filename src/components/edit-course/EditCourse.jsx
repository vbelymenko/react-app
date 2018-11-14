import React, { Component } from "react";
import { getCourseById, getPossibleAuthors, getCourseAuthors } from "../../db/db";
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import "./EditCourse.css";

export class EditCourse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            course: {},
            possibleAuthors: [],
            courseAuthors: []
        };
    }

    componentDidMount() {
        const course = getCourseById(this.props.match.params.id);
        const possibleAuthors = getPossibleAuthors(course.authorIds);
        const courseAuthors = getCourseAuthors(course.authorIds);
        this.setState({
            course,
            possibleAuthors,
            courseAuthors
        })
    }
    render() {
        return (
            <div className="container-fluid d-flex flex-column">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Title</span>
                    </div>
                    <input type="text"
                        class="form-control"
                        placeholder="Title"
                        aria-label="Title"
                        value={this.state.course.name}
                        aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Description</span>
                    </div>
                    <textarea class="form-control"
                        aria-label="Description"
                        value={this.state.course.description}></textarea>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Date</span>
                    </div>
                    <input type="text"
                        class="form-control"
                        placeholder="Date"
                        type="date"
                        aria-label="Date"
                        value={this.state.course.date}
                        aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Duration</span>
                    </div>
                    <input type="text"
                        class="form-control"
                        placeholder="Duration"
                        type="number"
                        min="0"
                        aria-label="Duration"
                        value={this.state.course.duration}
                        aria-describedby="basic-addon1" />
                </div>
                <div className="authors d-flex justify-content-between">
                    <ul className="potential-authors-list pl-0 m-0 float-left">
                        {
                            this.state.possibleAuthors.map((author) =>
                                <button key={author.id} type="button" className="list-group-item list-group-item-action">{author.name}</button>
                            )
                        }
                    </ul>
                    <div className="managment-course d-flex flex-column">
                        <div className="h-50 d-flex align-items-center">
                            <button className="btn btn-secondary" color="secondary">
                                <ArrowForward />
                            </button>
                        </div>
                        <div className="h-50 d-flex align-items-center">
                            <button className="btn btn-secondary" >
                                <ArrowBack />
                            </button>
                        </div>
                    </div>
                    <ul className="course-authors-list pl-0 m-0 float-right">
                        {
                            this.state.courseAuthors.map((author) =>
                                <button key={author.id} type="button" className="list-group-item list-group-item-action">{author.name}</button>)
                        }
                    </ul>
                </div>
                <div className="d-flex justify-content-around m-3">
                    <button className="btn btn-info btn-lg">
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