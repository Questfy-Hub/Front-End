import { Component} from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { environment } from '../../../environments/environment.development';
import { User } from '../../../user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users = environment.users


  constructor(private userService: UserService){}

  

}
