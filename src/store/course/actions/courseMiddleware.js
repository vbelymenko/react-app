import * as api from '../../api/api';
import * as courseAction from './courseActions';

export const getCourseById = (id) => dispatch => {
    api.get(id)
        .then(course => {
            dispatch(courseAction.getCourseById(course));
        });
};

export const getDefaultCourse = () => dispatch => {
    dispatch(courseAction.getDefaultCourse());
};

export const updateCourseField = (name, value) => dispatch => {
    const field = {
        name: name,
        value: value
    }
    dispatch(courseAction.changeCourseField(field));

};

export const cleanCourse = () => dispatch => {
    dispatch(courseAction.getDefaultCourse());
};
