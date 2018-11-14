import React, { Component } from "react";
import { getCourseById, getPossibleAuthors, getCourseAuthors } from "../../db/db";
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
            <div className="edit-course">

                <input
                    label="Name"
                    className="input"
                    defaultValue={this.state.course.name}
                />
                <textarea
                    rows="4"
                    label="Description"
                    className="input"
                    value={this.state.course.description}
                />
                <input
                    label="Date"
                    type="date"
                    className="input"
                    value={this.state.course.date}

                />
                <input
                    label="Duration"
                    type="number"
                    min="0"
                    className="input"
                    defaultValue={this.state.course.duration}
                />
                <div className="authors">
                    <ul className="potential-authors-list">
                        {
                            this.state.possibleAuthors.map((author) =>
                                <button key={author.id} type="button" className="list-group-item list-group-item-action">{author.name}</button>
                            )
                        }
                    </ul>
                    <div className="managment-course">
                        <button variant="fab" className="add-author-button btn btn-info" color="secondary">
                            <i className="glyphicon glyphicon-chevron-right"></i>
                        </button>
                        <button variant="fab" className="remove-author-button btn btn-default" >
                            <i className="glyphicon glyphicon-chevron-left"></i>
                        </button>
                    </div>
                    <ul className="course-authors-list">
                        {
                            this.state.courseAuthors.map((author) =>
                                <button key={author.id} type="button" className="list-group-item list-group-item-action">{author.name}</button>)
                        }
                    </ul>
                </div>
                <div className="edit-course-buttons">
                    <button color="secondary" className="save-button btn btn-default btn-lg">
                        Save
                    </button>
                    <button className="cancle-button btn btn-default btn-lg">
                        Cancle
                    </button>
                </div>
            </div>
        );
    }
}