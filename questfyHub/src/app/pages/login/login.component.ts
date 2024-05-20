import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  checkLogin(data: any) {
    let errList = document.querySelectorAll('.error');
    errList.forEach((err) => {
      err.setAttribute('style', 'opacity: 0;');
    });
    console.log(data);
    try {
      this.userService.auth(data.login, data.password).subscribe(
        (response) => {
          console.log(response);
          if (response.message == 'Senha inválida') {
            this.errMessage = response.message;
            errList[1].setAttribute("style", "opacity: 1;")
          }else if (response.message == "Email inválido"){
            this.errMessage = response.message;
            errList[0].setAttribute("style", "opacity: 1;")
          }
          else if(response.message == "Authenticated"){
            this.errMessage = '';
            localStorage.setItem('logged', data.login);
            window.location.reload();
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.errMessage = err.error.text;
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  /*   checkLogin(loginInfo: any){
    let errList = document.querySelectorAll(".error")
    errList.forEach((err) =>{
      err.setAttribute("style", "opacity: 0;")
    })
    try{
      this.userService.getUsers().subscribe(res => {
        for(let i = 0; i < res.length; i++){
          if(res[i].username == loginInfo.username){
            if(res[i].password == loginInfo.password){
              this.errMessage = ""
              localStorage.setItem("logged", res[i].username)
              window.location.reload()
            }else{
              this.errMessage = "Senha incorreta"
              errList[1].setAttribute("style", "opacity: 1;")
              break;
            }
          }else{
            this.errMessage = "Usuário Incorreto"
            errList[0].setAttribute("style", "opacity: 1;")
            break;
          }
        }
      })
    }catch{
      this.errMessage = "Erro Inesperado"
    }
  } */
}
