import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'sideNavbar',
  standalone: true,
  imports: [],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
})
export class SideNavbarComponent {
  isAdm: boolean = false;
  isGestor: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.checkAdm();
  }

 async checkAdm() {
    const loggedUser = localStorage.getItem("logged")
    let data:any;
    await this.userService.getUserByUsername(loggedUser).then( (resp) => {
      data = resp
    })
    console.log(data)
    if (data.role == "Gestor"){
      this.setIsGestor(true)
    }
/*     try {
      this.userService.getUserByUsername(localStorage.getItem('logged'))
        .then((resp) => {
          if (resp.role.toLowerCase() == 'administrador de sistemas') {
            this.setIsAdm(true);
          } else if (resp.role.toLowerCase() == 'gestor') {
            this.setIsGestor(true);
          }
        });
    }catch (err) {
      console.log('Error: ' + err);
    } */
  }

  setIsAdm(state: boolean) {
    this.isAdm = state;
  }

  setIsGestor(state: boolean) {
    this.isGestor = state;
  }
}
