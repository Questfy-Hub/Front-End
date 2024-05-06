import { Component} from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { environment } from '../../../environments/environment.development';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users = environment.users
  logged = localStorage.getItem("logged")


  ngOnInit(){
    this.searchUser(this.logged)
  }

  searchUser(user: string | null){
    if(user == null){
      throw Error('User invalid')
    }
    this.users.forEach((user) => {
      return user.position.toLowerCase() == "administrador de sistema"
    })


  }

}
