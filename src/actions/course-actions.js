import * as types from './action-types';
import axios from 'axios';

export function getAllCoursesAction(courses) {
  return {
    type: types.GET_ALL_COURSES,
    courses
  };
}

export const getAllCourses = () => dispatch => {
  axios.get(`http://localhost:8080/courses`)
    .then(res => {
      const courses = res.data;
      dispatch(getAllCoursesAction(courses));
    })
}