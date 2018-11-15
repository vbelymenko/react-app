const courses = [
    { id: 1, name: 'C++', authorIds: [1, 2], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '123', date: '2018-12-12' },
    { id: 2, name: 'Angular', authorIds: [3], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '22', date: '2018-12-12' },
    { id: 3, name: 'React', authorIds: [2], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '44', date: '2018-12-12' },
    { id: 4, name: 'Java', authorIds: [4, 2], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices tincidunt consequat. Nam diam sapien, porttitor quis facilisis quis, semper pharetra elit. Quisque vel dolor odio. Nulla tempus felis tincidunt mi dignissim tempus. Aenean a lacus non ipsum pretium varius at in magna. Mauris in ante id lorem ullamcorper ultrices. Nunc non libero quis orci feugiat tincidunt. Curabitur turpis odio, imperdiet ut aliquam a, bibendum non lacus.', duration: '67', date: '2018-12-12' },
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
const defaultCourse = { name: '', authorIds: [], description: '', duration: '', date: '2000-01-01' };



export const getCourseById = (id) => {
    if (!id) {
        return defaultCourse;
    } else {
        const index = parseInt(id, 10);
        return courses.filter((course) =>
            index === course.id
        )[0]
    }
}

export const getAll = () => {
    return courses;
}

export const getPossibleAuthors = (ids) => {
    return authors.filter((author) =>
        !ids.includes(author.id)
    );
}

export const getCourseAuthors = (ids) => {
    return authors.filter((author) =>
        ids.includes(author.id)
    );
}
