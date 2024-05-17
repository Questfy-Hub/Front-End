import { Component } from '@angular/core';

@Component({
  selector: 'user-popup',
  standalone: true,
  imports: [],
  templateUrl: './user-pop-up.component.html',
  styleUrl: './user-pop-up.component.css'
})
export class UserPopUpComponent {
  logOut(){
    localStorage.removeItem("logged")
    console.log(localStorage.getItem("logged"))
  }
} 
