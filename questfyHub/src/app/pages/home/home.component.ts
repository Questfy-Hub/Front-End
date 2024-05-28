import { Component, AfterViewInit } from '@angular/core';
import { SideNavbarComponent } from '../../components/side-navbar/side-navbar.component';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { RouterOutlet } from '@angular/router';
import { UserPopUpComponent } from '../../components/user-pop-up/user-pop-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SideNavbarComponent,
    MainHeaderComponent,
    CadastroComponent,
    RouterOutlet,
    UserPopUpComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  ngOnInit() {
    let userLogged = localStorage.getItem('logged');

    if (userLogged == null) {
      window.location.href = 'login';
    }
  }

  ngAfterViewInit() {
    this.checkOverflow();
  }

  checkOverflow() {
    let store = document.querySelector('app-store');

    if (store) {
      document
        .querySelector('.content')
        ?.setAttribute('style', 'overflow: scroll; margin-left: -5vw');
    }
  }
}
