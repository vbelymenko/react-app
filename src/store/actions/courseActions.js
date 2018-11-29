import * as types from './actionTypes';

export const getCourses= (payload) => {
  return {
    type: types.GET_COURSES,
    payload
  };
}

export function deleteCourse(payload) {
  return {
    type: types.DELETE_COURSE,
    payload
  };
}

export function createCourse(payload) {
  return {
    type: types.CREATE_COURSE,
    payload
  };
}

export function getCourseById(payload) {
  return {
    type: types.GET_COURSE_BY_ID,
    payload
  };
}

export function updateCourse(payload) {
  return {
    type: types.UPDATE_COURSE,
    payload
  };
}

export function changeCourseField(payload) {
  return {
    type: types.CHANGE_COURSE_FIELD,
    payload
  };
}

export function getDefaultCourse() {
  return {
    type: types.GET_DEFAULT_COURSE,
  };
}

export function updateFilter(payload) {
  return {
    type: types.UPDATE_FILTER,
    payload
  };
}

export function filterCourses() {
  return {
    type: types.FILTER_COURSES
  };
}

