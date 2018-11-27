import * as api from '../api/CoursesApi';
import { getCoursesSuccess, deleteCourseSuccess } from './courseActions';

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
    dispatch(deleteCourseSuccess(id));
};