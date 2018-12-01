import * as types from './coursesActionTypes';

export const getCourses = (payload) => {
    return {
        type: types.GET_COURSES,
        payload
    };
}

export const deleteCourse = (payload) => {
    return {
        type: types.DELETE_COURSE,
        payload
    };
}

export const createCourse = (payload) => {
    return {
        type: types.CREATE_COURSE,
        payload
    };
}

export const updateFilter = (payload) => {
    return {
        type: types.UPDATE_FILTER,
        payload
    };
}

export const updateCourse = (payload) => {
    return {
        type: types.UPDATE_COURSE,
        payload
    };
}

export const cleanFilter = () => {
    return {
        type: types.CLEAN_FILTER
    };
}