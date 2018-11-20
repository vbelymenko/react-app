const courses = [
    { id: 0, title: 'C++', authorIds: [1, 2], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '123', date: '2018-12-12' },
    { id: 1, title: 'Angular', authorIds: [3], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '22', date: '2018-12-12' },
    { id: 2, title: 'React', authorIds: [2], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '44', date: '2018-12-12' },
    { id: 3, title: 'Java', authorIds: [4, 2], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '67', date: '2018-12-12' },
    { id: 4, title: 'Angular', authorIds: [3], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '22', date: '2018-12-12' },
    { id: 5, title: 'React', authorIds: [2], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '44', date: '2018-12-12' },

];
const authors = [
    { id: 1, name: 'Aardman Animation' },
    { id: 2, name: 'Morra Aarons-Mele' },
    { id: 3, name: 'Stephan Abarbanell' },
    { id: 4, name: 'Christmas Abbott' },
    { id: 5, name: 'Karen Abbott' },
    { id: 6, name: 'Tessa Aberjonois' },
    { id: 7, name: 'Derek Acorah' },
    { id: 8, name: 'Daniel Abraham' }
];

export const getCourseById = (id) => {
    debugger
    return courses[id];
}

export const getAll = () => {
    return courses;
}

export const getPossibleAuthors = (ids) => {
    return authors.filter((author) =>
        !ids.includes(author.id)
    );
}

export const updateCourse = (course) => {
    courses[course.id] = course;
}

export const createCourse = (course) => {
    course.id = courses.length;
    courses.push(course);
}

export const getCourseAuthors = (ids) => {
    return authors.filter((author) =>
        ids.includes(author.id)
    );
}
