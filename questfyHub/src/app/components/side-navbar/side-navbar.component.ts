import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'sideNavbar',
  standalone: true,
  imports: [],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  isAdm: boolean = false

  constructor(private userService: UserService){
  }

  ngOnInit(){
    this.checkAdm()
  }

  
  checkAdm(){
    try{ 
    this.userService.getUsers().subscribe((resp) => {
      resp.forEach((user) => {
        if(user.username == localStorage.getItem("logged")){
          if(user.role.toLowerCase() == "administrador de sistemas"){
            this.setIsAdm(true)
          }
        }
      })
    })
  }catch{
    console.log("Error")
  }
  }
  setIsAdm(state: boolean){
    this.isAdm = state
  }
}
