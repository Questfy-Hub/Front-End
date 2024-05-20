import { Component } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { environment } from '../../../environments/environment.development';
import { Task } from '../../models/tasks';


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css',
})
export class TarefasComponent {
  //Lista de tarefas Pendentes, Aprovadas, Atrasadas e Concluidas
  p: Task[];
  apr: Task[];
  at: Task[];
  c: Task[];

  constructor() {
    //TODO: Substituir pela logica do backend
    this.p = this.getPendent();
    this.apr = this.getApproved();
    this.at = this.getLate();
    this.c = this.getConcluded();
  }

  ngOnInit() {
    console.log(this.p);
    this.configDrag();
  }

  //#region Get Types of Task
  getPendent() {
    let list: Task[] = [];
    environment.tasks.forEach((task) => {
      if (task.status?.toLowerCase() == 'p') {
        list.push(task);
      }
    });
    return list;
  }

  getApproved() {
    let list: Task[] = [];
    environment.tasks.forEach((task) => {
      if (task.status?.toLowerCase() == 'ap') {
        list.push(task);
      }
    });
    return list;
  }

  getLate() {
    let list: Task[] = [];
    environment.tasks.forEach((task) => {
      if (task.status?.toLowerCase() == 'at') {
        list.push(task);
      }
    });
    return list;
  }

  getConcluded() {
    let list: Task[] = [];
    environment.tasks.forEach((task) => {
      if (task.status?.toLowerCase() == 'c') {
        list.push(task);
      }
    });
    return list;
  }
  //#endregion

  configDrag(){
    let category;
    const columns = document.querySelectorAll(".task_list");
    document.addEventListener("dragstart", (e: any) =>{
      e.target.classList.add("dragging")
    });
    document.addEventListener("dragend", (e: any)=>{
      e.target.classList.remove("dragging")
      
    })
    columns.forEach((item)=>{
      item.addEventListener("dragover", (e:any) =>{
        const dragging: any = document.querySelector(".dragging")
        const applyAfter = this.getNewPosition(item, e.clientY)
        category = item.id
        
        if(applyAfter){
          /* console.log(dragging) */
          applyAfter.insertAdjacentElement("afterend", dragging)
          //console.log(e)

        }else{
          console.log(dragging.children[0].getAttribute("ng-reflect-task-info"))
          item.prepend(dragging);
        }
        
      })
    })
  }

  

  getNewPosition(column:any, posY:any){
    const cards = column.querySelectorAll(".item:not(.draggin)");
    let result;
    for(let ref of cards){
      const box = ref.getBoundingClientRect();
      const boxCenterY = box.y + box.height / 2;

      if(posY >= boxCenterY) result = ref
    }
    return result
  }

  teste(){
    const pend = document.getElementById("pending")
    console.log(pend?.childElementCount)
  }
}
