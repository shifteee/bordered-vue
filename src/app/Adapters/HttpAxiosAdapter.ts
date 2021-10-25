import { IIOAdapter } from "../interfaces/Adapter/IIOAdapter";
import {Axios, AxiosRequestConfig, AxiosResponse} from "axios";

export class HttpAxiosAdapter<T> implements IIOAdapter<AxiosRequestConfig, AxiosResponse<T>> {
    private readonly agent: Axios;

    constructor(params?: object) {
        this.agent = new Axios(params);
    }

    add(query: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.agent.put(query.url);
    }

    delete(query: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.agent.delete(query.url);
    }

    getAll(query: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.agent.get(query.url);
    }

    getByQuery(query: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.agent.get(query.url, query);
    }
}
