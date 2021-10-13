import axios from 'axios';

import { removeTokenFromLS, getTokenFromLS } from '../store/helpers/localStorageHelpers';

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const customConfig = config;
    const token = getTokenFromLS();
    if (token) {
      customConfig.headers.Authorization = token;
    }
    customConfig.headers.ContentType = 'application/json; charset=UTF-8';
    return customConfig;
  },
  (error) => Promise.reject(error),
);

Api.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    removeTokenFromLS('token');
  }
  return Promise.reject(error);
});

export default Api;
