import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { StoreItemComponent } from '../../components/store-item/store-item.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TaskCardComponent, StoreItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private userService: UserService){
  }

  ngOnInit(){
    //TODO: Fazer função que pega o usuário e faz um sort 
  }


}
