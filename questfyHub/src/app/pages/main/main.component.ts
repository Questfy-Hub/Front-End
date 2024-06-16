import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { StoreItemComponent } from '../../components/store-item/store-item.component';
import { TaskService } from '../../services/task.service';
import { RankingService } from '../../services/ranking.service';
import { User } from '../../../user';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TaskCardComponent, StoreItemComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  lastTasks: any[] = [];
  newestTasks: any[] = [];
  ranking: any[] = [];
  userLogged!: User
  constructor(
    private userService: UserService,
    private taskService: TaskService,
    private rankingService: RankingService
  ) {}

  ngOnInit() {
    this.taskService
      .getLastTasks(localStorage.getItem('logged'))
      .then((resp) => {
        if (resp.length < 3) {
          resp.forEach((task: any) => {
            this.lastTasks.push(task);
          });
        }else{
          this.lastTasks.push(resp[0], resp[1], resp[2])
        }
      });

    this.taskService.getNewestTasks(localStorage.getItem("logged"))
    .then((resp) => {
      if(resp.length < 3){
        resp.forEach((task: any) => {
          this.newestTasks.push(task);
        });
      }else{
        this.newestTasks.push(resp[0], resp[1], resp[2])
      }
    })

    this.rankingService.getMonthRank()
      .then((resp) => {
        resp.forEach((user:any) => {
          let temp = user.fullname.split(" ")
          user.fullname = temp[0] + " " + temp[temp.length-1]

          user.img = `http://localhost:8080/users/image/${user.username}`

        });
        this.ranking.push(resp[0], resp[1], resp[2])
      })
    
    this.userService.getUserByUsername(localStorage.getItem("logged"))
      .then( (resp) => {
          this.userLogged = resp
          this.userLogged.img = `http://localhost:8080/users/image/${this.userLogged.username}`
      })
  }
}
