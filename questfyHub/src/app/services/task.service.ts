import { Injectable } from '@angular/core';
import axios, { Axios, AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL : 'http://localhost:8080/task'
    })
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  }

  async getTaskByUsername(username: any){
    return (await this.axios.get(`/${username}`)).data;
  }
  async getTasksByEmail(email: string){
    return (await this.axios.get(`/${email}`)).data;
  }
  async getLastTasks(username: any){
    return (await this.axios.get(`/${username}/sorted`)).data;
  }
  async getNewestTasks(username: any){
    return (await this.axios.get(`/${username}/newest`)).data;
  }
  async getTaskByUsernameAndMonth(username: any, month: number){
    return (await this.axios.get(`/user/${username}/month/${month}`)).data;
  }
  async updateTask(task:any){
    console.log(typeof(task.userTask))
    return this.axios.patch(`/${task.taskCode}`, task, {headers: {"Content-Type": "application/json"}})
  }
}
