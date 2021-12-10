import axios from 'axios';

import { getTokenFromLS } from '../store/helpers/localStorageHelpers';

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('baseURL');

const Api = axios.create({
  baseURL: myParam || process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const customConfig = config;
    const userData = getTokenFromLS();
    const token = userData?.token;
    if (userData) {
      customConfig.headers.Authorization = token;
    }
    customConfig.headers.ContentType = 'application/json; charset=UTF-8';
    return customConfig;
  },
  (error) => Promise.reject(error),
);

export default Api;
