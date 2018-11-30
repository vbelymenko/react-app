import * as api from '../api/CoursesApi';
import * as courseAction from './courseActions';

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

export const getCourseById = (id) => dispatch => {
    api.get(id)
        .then(course => {
            dispatch(courseAction.getCourseById(course));
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

export const updateCourseField = (name, value) => dispatch => {
    const field = {
        name: name,
        value: value
    }
    dispatch(courseAction.changeCourseField(field));

};

export const getDefaultCourse = () => dispatch => {
    dispatch(courseAction.getDefaultCourse());
};

export const cleanCourse = () => dispatch => {
    dispatch(courseAction.getDefaultCourse());
};

export const updateCourseFilter = (filter) => dispatch => {
    dispatch(courseAction.updateFilter(filter));
};

export const cleanCourseFilter = () => dispatch => {
    dispatch(courseAction.cleanFilter());
};

