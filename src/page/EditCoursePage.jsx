import React, { Component } from 'react';
import { AppContainer } from '../components/app-container';
import { EditCourse } from '../components/edit-course';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/courses';
import { withRouter } from "react-router-dom";

export class EditCoursePageContainer extends Component {

    componentDidMount() {
        this.props.actions.getById(this.props.match.params.id);
    }
    handleChange = (event, field) => {
        console.log(field);
        console.log(event.target.value);
        // this.setState({
        //     ...this.state,
        //     course: {
        //         ...this.state.course,
        //         [field]: event.target.value
        //     }
        // });
    }

    handleSave = () => {
        this.props.actions.update(this.props.course);
        this.props.history.push(`/courses`);
    }
    render() {
        return (
            <AppContainer>
                <EditCourse
                    course={this.props.course}
                    onChange={this.handleChange}
                    onSave={this.handleSave}
                    possibleAuthors={[]}
                    courseAuthors={[]} />
            </AppContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        course: state.course.courseEntity
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export const EditCoursePage = withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCoursePageContainer));