import { Injectable } from '@angular/core';
import axios, { Axios, AxiosInstance } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private axios: AxiosInstance;
  
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:8080/company",
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  }


  async getCompanies(){
    return (await this.axios.get('/teste')).data;
  }

  async getCompanyById(id: any){
    return (await this.axios.get(`/${id}`)).data;
  }
}
