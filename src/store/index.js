import { combineReducers } from 'redux';

import course from './course/reducers/courseReducers';
import courses from './courses/reducers/coursesReducers';

export default combineReducers({
    courses,
    course
})