import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Api.interceptors.request.use(
  (config) => {
    const customConfig = config;
    if (config.token) {
      customConfig.headers.ContentType = 'application/json; charset=UTF-8';
      customConfig.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return customConfig;
  },
  (error) => Promise.reject(error),
);

// Api.interceptors.response.use(null, (error) => {
//   if (error.response.status === 401) {
//     localStorage.setItem('token', '');
//   }
//   return Promise.reject(error);
// });

export default Api;
