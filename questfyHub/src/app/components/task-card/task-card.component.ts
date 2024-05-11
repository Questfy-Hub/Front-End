import { Component, Input } from '@angular/core';
import { Task } from '../../models/tasks';

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input()
  taskInfo!: Task

  ngOnInit(){
    let priory = document.getElementById("priority")

/*     if(this.taskInfo.status?.toLowerCase() == ""){
      priory?.classList.add("")
    } */
  }
}
