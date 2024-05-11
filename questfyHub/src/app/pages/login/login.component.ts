import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { User } from '../../../user';
import { UserService } from '../../services/user.service';

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

  constructor(private formBuilder: FormBuilder, private userService: UserService){}


  ngOnInit(){
    if(this.userLogged == null){
      this.Login(new User())
    }else{
      window.location.href = ''
    }

  }


  Login(user: User){
    this.formLogin = this.formBuilder.group({
      username: [user.username],
      password: [user.password]
    });
  }

  onSubmit(){
    this.errMessage = ''
    let name = this.formLogin.controls['username'].value
    let password = this.formLogin.controls['password'].value

    if(name != "" && password != ""){
      this.checkLogin(this.formLogin.value)
      setTimeout(() =>{
        if (this.errMessage == '') {
          console.log('Logged');
        } else {
          console.log(this.errMessage);
        }
    },500)
    }
  }



  checkLogin(loginInfo: any){
    try{
      this.userService.getUsers().subscribe(res => {
        res.forEach(user => {
          if(user.username == loginInfo.username){
            console.log("Usuário certo")
            if(user.password == loginInfo.password){
              console.log("Senha Certa")
              localStorage.setItem("logged", user.username)
              window.location.reload()

            }else{this.errMessage = "Senha Incorreta"}
          }else{
            this.errMessage = "Usuário não encontrado"
          }
        })
      })
    }catch{
      this.errMessage = "Erro Inesperado"
    }
  }
}
