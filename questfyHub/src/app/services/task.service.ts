import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/task'; 
  }

  public getTasksByEmail(email: string): Observable<any[]>{
    return this.http.get<any[]>(this.url+ "/" + email);
  }
}
