import * as types from '../actions/action-types';

const initialState = {
  courses: []
};

const courseReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_COURSES:
      return { ...state, courses: action.courses };
    // case types.UPDATE_COURSE:
    //   return { ...state, courses: action.courses };
  }
  return state;
}

export default courseReducer;