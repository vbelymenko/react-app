import * as types from '../actions/actionTypes';

const initialState = {
    coursesList: []
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COURSES_SUCCESS: {
            return Object.assign({}, state, { coursesList: action.payload });
        }
        case types.DELETE_COURSE_SUCCESS: {
            return Object.assign({}, state, { coursesList: state.coursesList.filter(course => course.id !== action.payload) });
        }
        default:
            return state;
    }
}