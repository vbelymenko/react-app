import { combineReducers } from 'redux';

import courses from './courses';
import course from './course';

export default combineReducers({
    courses,
    course
})