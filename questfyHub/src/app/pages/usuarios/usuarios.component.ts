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
  users: User[] = []
  
  constructor(private userService: UserService){
  }

  ngOnInit(){
    this.userService.getUsers().subscribe(resp => {
      resp.forEach(user => {
        this.users.push(user)
      })
    })
  }

  //TODO: Fazer fonte ser reativa ao tamanho do email, nome, etc...

}
