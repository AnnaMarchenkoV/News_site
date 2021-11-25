import axios from 'axios';

import { getTokenFromLS } from '../store/helpers/localStorageHelpers';

const UNAUTHORIZED_STATUS = 401;

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const customConfig = config;
    const userData = getTokenFromLS();
    const token = userData?.token
    if (userData) {
      customConfig.headers.Authorization = token;
    }
    customConfig.headers.ContentType = 'application/json; charset=UTF-8';
    return customConfig;
  },
  (error) => Promise.reject(error),
);

export default Api;
