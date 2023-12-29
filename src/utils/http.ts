import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

class httpRequest {
  private axiosInstance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);

    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // You can add common headers or tokens here
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Modify response if needed
        return response;
      },
      (error) => {
        // Handle errors
        return Promise.reject(error);
      }
    );
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    if (!config) {
      config = {};
    }

    return this.axiosInstance
      .get<T>(url, config)
      .then((response) => response.data);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.axiosInstance
      .post<T>(url, data, config)
      .then((response) => response.data);
  }

  // Add other methods (put, delete, etc.) as needed
}

export default new httpRequest();
