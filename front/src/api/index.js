import axios from 'axios';

import { removeTokenFromLS, getTokenFromLS } from '../store/helpers/localStorageHelpers';

const UNAUTHORIZED_STATUS = 401;

console.log(process.env);

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const customConfig = config;
    const currentUser = getTokenFromLS();
    const token = JSON.parse(currentUser)?.token
    if (currentUser) {
      customConfig.headers.Authorization = token;
    }
    customConfig.headers.ContentType = 'application/json; charset=UTF-8';
    return customConfig;
  },
  (error) => Promise.reject(error),
);

// Api.interceptors.response.use(null, (error) => {
//   if (error.response.status === UNAUTHORIZED_STATUS) {
//     removeTokenFromLS('token');
//   }
//   return Promise.reject(error);
// });

export default Api;
