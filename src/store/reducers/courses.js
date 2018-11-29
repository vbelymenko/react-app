import * as types from '../actions/actionTypes';

const initialState = {
    filteredCoursesList: [],
    coursesList: [],
    filter: ''
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COURSES: {
            return Object.assign({}, state, { filteredCoursesList: action.payload, coursesList: action.payload });
        }
        case types.FILTER_COURSES: {
            return Object.assign({}, state, { filteredCoursesList: state.coursesList.filter(course => course.title.includes(state.filter)) });
        }
        case types.UPDATE_FILTER: {
            return Object.assign({}, state, { filter: action.payload });
        }
        case types.DELETE_COURSE: {
            return Object.assign({}, state, { filteredCoursesList: state.filteredCoursesList.filter(course => course.id !== action.payload) });
        }
        case types.CREATE_COURSE: {
            return Object.assign({}, state, { filteredCoursesList: [...state.filteredCoursesList, action.payload] });
        }
        case types.UPDATE_COURSE: {
            return Object.assign({}, state, {
                filteredCoursesList: state.filteredCoursesList.map(course => {
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