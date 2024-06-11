import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment.development';

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

  constructor() {}

  ngOnInit() {
    this.checkAdm();
  }

 async checkAdm() {
    let data: any = await environment.logged;
    if(data.role == "Gestor"){
      this.isGestor = true;
    }
  }
}
