import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000,
});
