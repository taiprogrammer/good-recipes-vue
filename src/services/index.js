import axios from 'axios';

const api = axios.create({
  baseURL: 'https://good-recipes-api.onrender.com/',
});

export default api;
