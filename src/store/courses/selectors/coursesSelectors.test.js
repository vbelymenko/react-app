import {
    coursesSelector,
} from './coursesSelector';
 describe('Courses Selectors', () => {
    describe('getCourses', () => {
        it('should return expected courses.', () => {
            let mockParameters = {
                courses: {
                    coursesList: [
                        { id: 1, title: "name1", description: "desc1" },
                        { id: 2, title: "name2", description: "desc2" }
                    ],
                    filter: ''
                },
            };
            const courseResponse = coursesSelector(mockParameters);
            expect(courseResponse).toEqual([
                { id: 1, title: "name1", description: "desc1" },
                { id: 2, title: "name2", description: "desc2" }
            ]);
        });
    });
}); 