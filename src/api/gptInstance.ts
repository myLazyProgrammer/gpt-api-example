import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openai.com/v1/',
  timeout: 50000,
});


export default api;