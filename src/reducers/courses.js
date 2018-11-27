import * as types from '../actions/actionTypes';

const initialState = {
    courses: []
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COURSES_SUCCESS: {
            return Object.assign({}, state, { courses: action.payload });
        }
        case types.DELETE_COURSE_SUCCESS: {
            return Object.assign({}, state, { courses: state.courses.filter(course => course.id !== action.payload) });
        }
        case types.GET_COURSE_BY_ID_SUCCESS: {
            return Object.assign({}, state, { courses: state.courses.filter(course => course.id === action.payload) });
        }
        default:
            return state;
    }
}