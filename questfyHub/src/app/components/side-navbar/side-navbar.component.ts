import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment.development';
import { User } from '../../../user';

@Component({
  selector: 'sideNavbar',
  standalone: true,
  imports: [],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  isadm: boolean = false

  constructor(private userService: UserService){}


  ngOnInit(){
    this.isadm = this.userService.checkAdm()
  }
}
