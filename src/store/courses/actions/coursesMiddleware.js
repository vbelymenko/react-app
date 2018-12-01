import * as api from '../../api/api';
import * as courseAction from './coursesActions';

export const getAllCourses = () => dispatch => {
    api.getAll()
        .then(courses => {
            dispatch(courseAction.getCourses(courses));
        });
};

export const removeCourse = (id) => dispatch => {
    api.remove(id)
        .then(id => {
            dispatch(courseAction.deleteCourse(id));
        });
};

export const updateCourse = (course) => dispatch => {
    api.update(course)
        .then(course => {
            dispatch(courseAction.updateCourse(course));
        });
};

export const createCourse = (course) => dispatch => {
    api.create(course)
        .then(course => {
            dispatch(courseAction.createCourse(course));
        });
};

export const updateCourseFilter = (filter) => dispatch => {
    dispatch(courseAction.updateFilter(filter));
};

export const cleanCourseFilter = () => dispatch => {
    dispatch(courseAction.cleanFilter());
};