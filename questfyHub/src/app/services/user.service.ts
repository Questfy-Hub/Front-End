import { Injectable } from '@angular/core';
import { User } from '../../user';
import axios, { Axios, AxiosInstance } from 'axios';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/users',
    });
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  }

  async getUsers() {
    /* return this.http.get<User[]>(this.url); */
    return (await this.axios.get('')).data;
  }

  async getUserByUsername(username: any){
    return (await this.axios.get(`/${username}`)).data;
  }

  async getUserByEmail(email: any) {
    return (
      await this.axios.get(`/mail`, {
        params: { login: email },
      })
    ).data;
  }

  async auth(login: string, password: string) {
    const data = {
      login: login,
      password: password,
    };
    return (await this.axios.post('auth', data)).data;
  }

  async createUser(data: FormData) {
    return (
      await this.axios.post(''),
      {
        headers: ['Content-Type', 'multipart/form-data'],
        body: data,
      }
    );
  }

  async getUserImage(username: any) {
    return (await this.axios.get('/image/' + username)).data;
  }

  teste(data: FormData) {
    return this.axios
      .post<FormData>('try', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .catch(function (err) {
        Swal.fire({
          title: 'Erro!',
          text: err.response.status >= 400 ? 'Erro interno' : '',
          icon: 'error',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#31357C',
        });
      });
  }


}
