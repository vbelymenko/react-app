import * as types from './actionTypes';

export const getCoursesSuccess = (payload) => {
  return {
    type: types.GET_COURSES_SUCCESS,
    payload
  };
}

export function deleteCourseSuccess(payload) {
  return {
    type: types.DELETE_COURSE_SUCCESS,
    payload
  };
}

export function getCourseByIdSuccess(payload) {
  return {
    type: types.GET_COURSE_BY_ID_SUCCESS,
    payload
  };
}

export function updateCourseSuccess(payload) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    payload
  };
}
