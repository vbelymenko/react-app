import * as types from '../actions/actionTypes';

const initialState = {
    courseEntity: {}
}

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COURSE_BY_ID_SUCCESS: {
            return Object.assign({}, state, { courseEntity: action.payload });
        }
        // case types.CHANGE_COURSE_FIELD_SUCCESS: {
        //     return Object.assign({}, state, { courseEntity: action.payload });
        // }
        default:
            return state;
    }
}