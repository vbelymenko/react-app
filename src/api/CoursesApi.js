import axios from 'axios';

const apiUrl = 'http://localhost:8080/courses';

const apify = axiosPromise =>
    new Promise((resolve, reject) =>
        axiosPromise.then(({ data }) => resolve(data)).catch(reject)
    );

export const remove = (id) => apify(axios.delete(`${apiUrl}/${id}`));

export const get = (id) => apify(axios.get(`${apiUrl}/${id}`));

export const getAll = () => apify(axios.get(apiUrl));

export const update = (course) => apify(axios.put(apiUrl, course));