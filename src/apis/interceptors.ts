import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

function registerInterceptors(axios: AxiosInstance) {
  /* Request interceptor */
  axios.interceptors.request.use((request: AxiosRequestConfig) => {
    return request;
  });

  /* Response interceptor */
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response?.data;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

export default registerInterceptors;
