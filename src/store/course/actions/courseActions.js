import * as types from './courseActionTypes';

export const getCourseById = (payload) => {
    return {
        type: types.GET_COURSE_BY_ID,
        payload
    };
}

export const getDefaultCourse = () => {
    return {
        type: types.GET_DEFAULT_COURSE,
    };
}

export const changeCourseField = (payload) => {
    return {
        type: types.CHANGE_COURSE_FIELD,
        payload
    };
}
