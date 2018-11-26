import * as types from '../actions/actionTypes';

const initialState = {
    courses: [{id:"name"}]
}

export function coursesReducer(state = initialState, action) {
    if (action.type === types.GET_COURSES_SUCCESS) {
        debugger
        return Object.assign({}, state, { courses: action.payload });
    }
    return state;
}