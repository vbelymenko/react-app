import * as types from '../actions/actionTypes';

const initialState = {
    courseEntity: {
        title: '',
        duration: 0,
        description: '',
        date: '2000-01-01',
        authors: []
    },
    possibleAuthors: [],
    courseAuthors: []

}

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COURSE_BY_ID: {
            return Object.assign({}, state, { courseEntity: action.payload });
        }
        case types.CHANGE_COURSE_FIELD: {
            return Object.assign({}, state, { ...state, courseEntity: { ...state.courseEntity, [action.payload.name]: action.payload.value } });
        }
        case types.GET_DEFAULT_COURSE: {
            return initialState;
        }
        default:
            return state;
    }
}