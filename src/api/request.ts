import axios from "axios";
import { getApiConfig } from "@/config/api.config";

const apiConfig = getApiConfig();

const api = axios.create({
  baseURL: apiConfig.apiUrl,
  // apiKEY: apiConfig.apiKey,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    config.headers["X-API-KEY"] = "62d6bbc8-78dc-4c38-8763-ce6726a81471";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const { response } = error;

    // const customError = new HttpError({
    //   status: response?.status || null,
    //   message: response?.data?.message,
    // });

    return Promise.reject(error);
  }
);

export default api;
