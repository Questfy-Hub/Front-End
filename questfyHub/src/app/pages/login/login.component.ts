import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { User } from '../../../user';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin !: FormGroup;
  userIsValid: boolean = false;
  errMessage: string = '';
  userLogged = localStorage.getItem('logged')

  constructor(
    private formBuilder: FormBuilder
  ){}


  ngOnInit(){
    if(this.userLogged == null){
      this.Login(new User())
    }else{
      window.location.href = 'home'
    }
  }


  Login(user: User){
    this.formLogin = this.formBuilder.group({
      username: [user.username],
      password: [user.password]
    });
  }

  onSubmit(){
    let name = this.formLogin.controls['username'].value
    let password = this.formLogin.controls['password'].value

    if(name != "" && password != ""){
      this.checkLogin(this.formLogin.value)
      setTimeout(() =>{
        if (this.errMessage == '') {
          console.log('Logged');
          window.location.reload()
        } else {
          console.log(this.errMessage);
        }
    },500)
    }
  }



  checkLogin(loginInfo: any){
    environment.users.forEach((user)=>{
      if(user.username == loginInfo.username){
        if(user.password == loginInfo.password){
          localStorage.setItem('logged', user.username)
        }else{
          this.errMessage = 'Wrong password!'
        }
      }
    })
  }
}
