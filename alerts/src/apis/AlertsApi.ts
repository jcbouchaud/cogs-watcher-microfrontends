//https://semaphoreci.com/blog/api-layer-react

import axios, {AxiosInstance} from "axios";

class AlertsApi {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({baseURL: "http://localhost:9000/api/alert"});
    }

    async get(id: string){
        return await this.instance.get(`/${id}/`)
    }
    async update(id: string){
        return await this.instance.patch(`/${id}/`)
    }
    async delete(id: string){
        return await this.instance.delete(`/${id}/`)
    }
    async create(){
        return await this.instance.post("/", {})
    }
    async getAll(){
        return await this.instance.get("/", {})
    }
}

export default new AlertsApi()