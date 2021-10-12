import axios from 'axios';

import { tokenFromLS } from '../store/helpers/index';

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const customConfig = config;
    if (tokenFromLS) {
      customConfig.headers.ContentType = 'application/json; charset=UTF-8';
      customConfig.headers.Authorization = JSON.parse(tokenFromLS);
    }
    return customConfig;
  },
  (error) => Promise.reject(error),
);

Api.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    localStorage.setItem('token', '');
  }
  return Promise.reject(error);
});

export default Api;
