import * as api from '../api/CoursesApi';
import * as courseAction from './courseActions';

export const getAll = () => dispatch => {
    api.getAll()
        .then(courses => {
            dispatch(courseAction.getCourses(courses));
        });
};

export const remove = (id) => dispatch => {
    api.remove(id)
        .then(id => {
            dispatch(courseAction.deleteCourse(id));
        });
};

export const getById = (id) => dispatch => {
    api.get(id)
        .then(course => {
            dispatch(courseAction.getCourseById(course));
        });
};

export const update = (course) => dispatch => {
    api.update(course)
        .then(course => {
            dispatch(courseAction.updateCourse(course));
        });
};

export const create = (course) => dispatch => {
    api.create(course)
        .then(course => {
            dispatch(courseAction.createCourse(course));
        });
};

export const updateField = (name, value) => dispatch => {
    const field = {
        name: name,
        value: value
    }
    dispatch(courseAction.changeCourseField(field));

};

export const getDefault = () => dispatch => {
    dispatch(courseAction.getDefaultCourse());
};

export const clean = () => dispatch => {
    dispatch(courseAction.getDefaultCourse());
};

export const updateFilter = (filter) => dispatch => {
    dispatch(courseAction.updateFilter(filter));
};

export const cleanFilter = () => dispatch => {
    dispatch(courseAction.cleanFilter());
};

