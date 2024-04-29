import { Component } from '@angular/core';
import { SideNavbarComponent } from '../../components/side-navbar/side-navbar.component';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideNavbarComponent, MainHeaderComponent, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
