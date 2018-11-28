import * as api from '../api/CoursesApi';
import { getCoursesSuccess, deleteCourseSuccess, getCourseByIdSuccess, updateCourseSuccess } from './courseActions';

export const getAll = () => dispatch => {
    api.getAll()
        .then(courses => {
            dispatch(getCoursesSuccess(courses));
        });
};

export const remove = (id) => dispatch => {
    api.remove(id)
        .then(id => {
            dispatch(deleteCourseSuccess(id));
        });
};

export const getById = (id) => dispatch => {
    api.get(id)
        .then(course => {
            dispatch(getCourseByIdSuccess(course));
        });
};

export const update = (course) => dispatch => {
    api.update(course)
        .then(course => {
            dispatch(updateCourseSuccess(course));
        });
};