import * as api from '../api';
import actionTypes from './courseActions';

export const getCoursesList = () => dispatch => {
    dispatch({ type: actionTypes.GET_COURSES_LIST });
    api
        .getCoursesList()
        .then(courses => {
            dispatch({
                type: actionTypes.GET_COURSES_LIST,
                payload: { courses },
            });
        });
};