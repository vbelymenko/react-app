import * as types from './actionTypes';

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

export const getCourseById = (payload) => {
  return {
    type: types.GET_COURSE_BY_ID,
    payload
  };
}

export const updateCourse = (payload) => {
  return {
    type: types.UPDATE_COURSE,
    payload
  };
}

export const changeCourseField = (payload) => {
  return {
    type: types.CHANGE_COURSE_FIELD,
    payload
  };
}

export const getDefaultCourse = () => {
  return {
    type: types.GET_DEFAULT_COURSE,
  };
}

export const updateFilter = (payload) => {
  return {
    type: types.UPDATE_FILTER,
    payload
  };
}

export const cleanFilter = () => {
  return {
    type: types.CLEAN_FILTER
  };
}
