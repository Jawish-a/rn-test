import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
    withCredentials: true,
});
// add the user token to all request
http.interceptors.request.use(function (config) {
    // take the token from whatever
    const token = '123';
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
});

// log the userout or do a magic trick in case the token expired or the user is unauthorized
http.interceptors.response.use(
    function (response) {
        return Promise.resolve(response);
    },
    function (error) {
        if (error.response?.data?.message?.toLowerCase() === 'unauthorized') {
            // TODO
            // remove the token from local storage
            // THEN
            // redirect the user to home screen or else
        }
        return Promise.reject(error);
    },
);

export default http;
