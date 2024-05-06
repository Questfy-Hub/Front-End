import { Injectable } from '@angular/core';
import { User } from '../../user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor() { }


  checkAdm(){
    let isAdm: boolean = false;
    environment.users.forEach((user)=>{
      if(user.username == localStorage.getItem('logged')){
        if(user.position.toLowerCase() == 'administrador de sistemas'){
          isAdm = true
        }
      }
    })
    return isAdm;
  }



}
