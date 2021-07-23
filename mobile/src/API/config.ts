import {API_URL} from '../constant';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const sleep = (delay: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = API_URL;

axios.interceptors.response.use(async response => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => {
  return response.data;
};

export const requests = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axios.get<T>(url, config).then(responseBody),
  post: <T>(url: string, body: {}, config?: AxiosRequestConfig) =>
    axios.post<T>(url, body, config).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};
