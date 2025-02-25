import axios, { InternalAxiosRequestConfig } from 'axios';
import { API_URL } from './api.endpoints';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Для логировая запросов. В проде этого быть не должно.
  // if (config.method === 'delete' || config.method === 'post') {
  //   console.groupCollapsed('------------- axiosInstance', '/', config.method, config.url);
  //   console.log('Accept       -', config.headers.Accept);
  //   console.log('Content-Type -', config.headers['Content-Type']);
  //   console.log('data         -', config.data);
  //   console.groupEnd();
  // }

  // if (config.method === 'get' || config.method === 'post') {
  //   console.group('axiosInstance');
  //   console.log(config);
  //   console.groupEnd();
  // }

  return config;
});

export default axiosInstance;
