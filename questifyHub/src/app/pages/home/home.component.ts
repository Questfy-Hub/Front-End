import { Component } from '@angular/core';
import { SideNavbarComponent } from '../../components/side-navbar/side-navbar.component';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideNavbarComponent, MainHeaderComponent, CadastroComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
