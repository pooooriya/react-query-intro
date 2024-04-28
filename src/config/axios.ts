import axios from 'axios';
export const AXIOS = axios.create({
    baseURL:"https://dog.ceo/api/",
    timeout:20000,
})
