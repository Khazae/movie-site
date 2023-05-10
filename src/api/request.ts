import axios from "axios";
import { getApiConfig } from "@/config/api.config";

const apiConfig = getApiConfig();

const api = axios.create({
  baseURL: apiConfig.apiUrl,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    config.headers["X-API-KEY"] = apiConfig.apiKey;

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
