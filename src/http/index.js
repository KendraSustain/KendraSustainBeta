import axios from 'axios';

const apiUser = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    },
});
const apiToken = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
    },
});

// List of all endpoints
export const register = (data) => apiUser.post('/api/users', data);
export const getToken = (data) => apiToken.post('/api/token', data);

export default getToken;