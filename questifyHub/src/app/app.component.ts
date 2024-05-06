import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'questifyHub';
  userLogged!: User
}
