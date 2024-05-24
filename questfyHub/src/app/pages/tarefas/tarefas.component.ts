import { Component, ViewChild } from '@angular/core';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { environment } from '../../../environments/environment.development';
import { Task } from '../../models/tasks';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css',
})
export class TarefasComponent {
  @ViewChild(TaskCardComponent) cardComponent!: TaskCardComponent
  pendent: any[] = [];
  waiting: any[] = [];
  started: any[] = [];
  finished: any[] = [];

  constructor(private taskService: TaskService) {
    //TODO: Substituir pela logica do backend
  }

  ngOnInit() {
    this.configDrag();
    this.taskService.getTasksByEmail(localStorage.getItem("logged")!).subscribe(resp =>{
      resp.forEach(task =>{
        this.checkTaskStatus(task);
      })
    })
  }

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
        this.cardComponent = dragging;
        const applyAfter = this.getNewPosition(item, e.clientY)
        
        
        if(applyAfter){
          category = item.id;
          applyAfter.insertAdjacentElement("afterend", dragging)
        }else{
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

  teste(task: Task){
    console.log(task.status)
  }
  checkTaskStatus(task: any){
    switch(task.statusTask.statusCode){
      case 1:
        this.pendent.push(task);
        break;
      case 2:
        this.waiting.push(task);
        break;
      case 3:
        this.started.push(task);
        break;
      case 4:
        this.finished.push(task);
        break;
    }
  }
}
