import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formLogin!: FormGroup;
  userIsValid: boolean = false;
  errMessage: string = '';
  userLogged = localStorage.getItem('logged');

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (this.userLogged == null) {
      this.Login(new User());
    } else {
      window.location.href = '';
    }
  }

  Login(user: User) {
    this.formLogin = this.formBuilder.group({
      login: [user.email],
      password: [user.password],
    });
  }

  onSubmit() {
    this.errMessage = '';
    let name = this.formLogin.controls['login'].value;
    let password = this.formLogin.controls['password'].value;

    if (name != '' && password != '') {
      this.checkLogin(this.formLogin.value);
      setTimeout(() => {
        if (this.errMessage == '') {
          console.log('Logged');
        } else {
          console.log(this.errMessage);
        }
      }, 500);
    }
  }

  async checkLogin(data: any) {
    let errList = document.querySelectorAll('.error');
    errList.forEach((err) => {
      err.setAttribute('style', 'opacity: 0;');
    });
    try {
      this.userService.auth(data.login, data.password)
        .then(resp =>{
          if(resp.success == true){
            this.errMessage = '';
            console.log(resp.userLogged)
            localStorage.setItem("logged", resp.userLogged)
            window.location.reload();
          }else{
            this.errMessage = resp.message
            if(resp.message == "Senha Incorreta"){
              errList[1].setAttribute("style", "opacity: 1")
            }else if(resp.message == "Email incorreto" || resp.message == "Email inválido"){
              errList[0].setAttribute("style", "opacity: 1")
            }
          }
        })
      
    } catch (err) {
      console.log(err);
    }
  }

}