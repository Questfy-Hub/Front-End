import { Component, Input} from '@angular/core';
import { User } from '../../../user';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: User
  name: string = ""

  ngOnInit(){
    //Separar nome 
    let nameArr = this.user.fullname.split(" ")
    this.name = nameArr[0] + " " + nameArr[nameArr.length - 1]
  }
}
