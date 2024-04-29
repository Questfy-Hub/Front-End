import { Component } from '@angular/core';

@Component({
  selector: 'sideNavbar',
  standalone: true,
  imports: [],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {



  expand(){
    let body = document.getElementById("nav__body")
    body!.style.width = "200px"
  }
  shrink(){
    
  }
}
