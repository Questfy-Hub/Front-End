import { Component } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { environment } from '../../../environments/environment.development';
import { Task } from '../../models/tasks';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  //Lista de tarefas Pendentes, Aprovadas, Atrasadas e Concluidas
  p: Task[];
  apr: Task[];
  at: Task[];
  c: Task[];

  constructor(){
    //TODO: Substituir pela logica do backend
    this.p = this.getPendent()
    this.apr = this.getApproved()
    this.at = this.getLate()
    this.c = this.getConcluded()
  }
  
  ngOnInit(){
    console.log(this.p)
  }

  getPendent(){
    let list: Task[] = []
    environment.tasks.forEach((task) =>{
      if(task.status?.toLowerCase() == "p"){
        list.push(task)
      }
    })
    return list;
  }

  getApproved(){
    let list: Task[] = []
    environment.tasks.forEach((task) =>{
      if(task.status?.toLowerCase() == "ap"){
        list.push(task)
      }
    })
    return list;
  }

  getLate(){
    let list: Task[] = []
    environment.tasks.forEach((task) =>{
      if(task.status?.toLowerCase() == "at"){
        list.push(task)
      }
    })
    return list;
  }

  getConcluded(){
    let list: Task[] = []
    environment.tasks.forEach((task) =>{
      if(task.status?.toLowerCase() == "c"){
        list.push(task)
      }
    })
    return list;
  }

}
