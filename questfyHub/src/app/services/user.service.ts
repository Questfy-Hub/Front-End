import { Injectable } from '@angular/core';
import { User } from '../../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users');
  }
}
