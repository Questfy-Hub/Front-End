import { Component} from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
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
    this.userService.getUsers()
      .then(resp =>{
        resp.forEach((user:any) => {
          this.users.push(user)
          user.img = `http://localhost:8080/users/image/${user.username}`
        });
      })
  }
 
}
