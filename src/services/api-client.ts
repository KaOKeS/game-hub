import axios, { AxiosRequestConfig } from "axios";

const axiosInstance  = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'blabla' //Generate yout own key at rawg.io to test functionality
    }
});

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

class ApiClient<T> {
    endpoint: string;

    constructor (endpoint : string){
        this.endpoint = endpoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }
}

export default ApiClient;