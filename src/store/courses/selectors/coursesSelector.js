import { createSelector } from 'reselect';

export const getCourses = (state) => {
    return {
        coursesList: state.courses.coursesList,
        filter: state.courses.filter
    }
};

export const coursesSelector = createSelector(
    [getCourses],
    (courses) => {
        return courses.coursesList.filter(course => course.title.includes(courses.filter));
    }
);