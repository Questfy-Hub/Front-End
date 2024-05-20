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
    this.userService.getUserByEmail(localStorage.getItem("logged")).subscribe((resp) => {
      if(resp.role.toLowerCase() == "administrador de sistemas"){
        this.setIsAdm(true)
      }
    })
  }catch{
    console.log("Error")
  }
  }
  setIsAdm(state: boolean){
    this.isAdm = state
  }
}
