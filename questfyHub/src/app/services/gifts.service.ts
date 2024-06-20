import { Injectable } from '@angular/core';
import axios, { Axios, AxiosInstance } from 'axios';
@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/gifts',
    });
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  }

  async getGifts() {
    return (await this.axios.get('')).data;
  }

  async getGiftById(id: any) {
    return (await this.axios.get(`/${id}`)).data;
  }

  async createGift(data: FormData) {
    data.forEach(value=>{
      console.log(value)
    })
    return await this.axios.post<FormData>('', data,
      {headers: { 'Content-Type': 'multipart/form-data' }}
    );
  }

  async getByCompany(company: any) {
    return (await this.axios.get('')).data;
  }
  async getImage(id: any){
    return(await this.axios.get(`/image/${id}`)).data;
  }
}
