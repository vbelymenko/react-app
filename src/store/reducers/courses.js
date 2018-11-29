import * as types from '../actions/actionTypes';

const initialState = {
    coursesList: []
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COURSES: {
            return Object.assign({}, state, { coursesList: action.payload });
        }
        case types.DELETE_COURSE: {
            return Object.assign({}, state, { coursesList: state.coursesList.filter(course => course.id !== action.payload) });
        }
        case types.CREATE_COURSE: {
            debugger
            return Object.assign({}, state, { coursesList: [...state.coursesList, action.payload] });
        }
        case types.UPDATE_COURSE: {
            return Object.assign({}, state, {
                coursesList: state.coursesList.map(course => {
                    if (course.id === action.payload.id) {
                        return action.payload;
                    }
                    return course;
                })
            });
        }
        default:
            return state;
    }
}