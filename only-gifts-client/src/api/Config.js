import axios from 'axios';

export const axiosBase = axios.create({
    baseURL: "https://only-gifts-api.herokuapp.com/api"
});