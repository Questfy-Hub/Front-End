import { Injectable } from '@angular/core';
import axios, { Axios, AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:8080/ranking/"
    })
  }

  async getMonthRank(){
    return (await this.axios.get(`monthly`)).data;
  }
}
