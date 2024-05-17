import { Component, Input } from '@angular/core';
import { Task } from '../../models/tasks';
import { NgClass } from '@angular/common';

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input()
  taskInfo!: Task;
  
  constructor(){
  }

  ngOnInit() {
    /* this.definePriority() */
  }

  definePriority(){
    let priory = document.getElementById('priority');
    switch (this.taskInfo.priority) {
      case 'High':
        priory!.classList.add('high');
        break;
      case 'Medium':
        priory!.classList.add('mid');
        break;
      case 'Low':
        priory!.classList.add('low');
    }
  }

}
