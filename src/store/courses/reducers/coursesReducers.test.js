import {
    courses
} from './coursesReducers'

import * as coursesActions from '../actions/coursesActions';

describe('Courses Reducers', () => {

    let testedCourses = [
        { id: 1, title: "name1", description: "desc1" },
        { id: 2, title: "name2", description: "desc2" }
    ];
    let initialState = {
        coursesList: testedCourses,
        filter: ''
    }

    it('properly returns courses', () => {
        expect(courses(initialState, coursesActions.getCourses(testedCourses))).toEqual(initialState);
    });

    it('properly returns courses with new course', () => {
        const createdCourse = { id: 3, name: "name3", description: "desc3" }
        const expectedResult = { ...initialState, coursesList: [...initialState.coursesList, createdCourse] }
        expect(courses(initialState, coursesActions.createCourse(createdCourse))).toEqual(expectedResult);
    });

    it('properly updates courses with removed course', () => {
        let removedCourseId = 1;
        const expectedResult = { ...initialState, coursesList: initialState.coursesList.filter(course => course.id !== removedCourseId) }
        expect(courses(initialState, coursesActions.deleteCourse(removedCourseId))).toEqual(expectedResult);
    });

    it('properly clean course filter', () => {
        const expectedResult = { ...initialState, filter: '' }
        expect(courses(initialState, coursesActions.cleanFilter())).toEqual(expectedResult);
    });

    it('properly update course filter', () => {
        const newFilter = 'test';
        const expectedResult = { ...initialState, filter: newFilter }
        expect(courses(initialState, coursesActions.updateFilter(newFilter))).toEqual(expectedResult);
    });

    it('properly returns courses with updated course', () => {
        const updatedCourse = { id: 2, name: "update", description: "desc3" }
        const expectedResult = {
            ...initialState, coursesList: initialState.coursesList.map(course => {
                if (course.id === updatedCourse.id) {
                    return updatedCourse;
                }
                return course;
            })
        }
        expect(courses(initialState, coursesActions.updateCourse(updatedCourse))).toEqual(expectedResult);
    });

})