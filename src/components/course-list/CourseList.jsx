import React, { Component } from 'react';
import { CourseItem } from '../course-item';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class CourseList extends Component {

    static get propTypes() {
        return {
            courses: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
                date: PropTypes.string,
                duration: PropTypes.number
            }).isRequired).isRequired,
            removeCourse: PropTypes.func.isRequired,
            editCourse: PropTypes.func.isRequiredY
        };
    }

    render() {
        const { fetchMoreCourses, courses, editCourse, removeCourse, hasMore } = this.props;
        return (
            <div>
                <InfiniteScroll
                    dataLength={courses.length}
                    next={fetchMoreCourses}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}>

                    {this.renderCourses(editCourse, removeCourse, courses)}

                </InfiniteScroll>
            </div>
        );
    }

    renderCourses = (editCourse, removeCourse, courses) => {
        return courses.map(courseItem =>
            <CourseItem
                key={courseItem.id}
                course={courseItem}
                removeCourse={removeCourse}
                editCourse={editCourse} />);
    }
}