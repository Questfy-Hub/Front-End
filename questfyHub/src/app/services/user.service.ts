import { Injectable } from '@angular/core';
import { User } from '../../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/users'; 
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  public getUserByEmail(email:any){
    //localhost:8080/users/email/machado.gabrielevaristo@gmail.com
    return this.http.get<User>(this.url + "/email/" + email)
  }
  public auth(login:string, password:string): Observable<any>{
    const header = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
    const data = {
      login: login,
      password: password
    }
    return this.http.post(this.url + "/auth", data, header)
  }
}
