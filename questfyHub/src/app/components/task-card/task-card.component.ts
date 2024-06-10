import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../../models/tasks';
import { formatDate, NgClass } from '@angular/common';

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
  @Output() transfereData = new EventEmitter<Task>();

  ngOnInit() {
  }
  onDragStart(event: DragEvent){
    event.dataTransfer!.setData("text/plain", JSON.parse(this.taskInfo.status!))
  }

  definePriority(){
    let priory = document.getElementById('priority');
    switch (this.taskInfo.priority) {
      case 'Alta':
        priory!.classList.add('high');
        break;
      case 'Medio':
        priory!.classList.add('mid');
        break;
      case 'Baixa':
        priory!.classList.add('low');
    }
  }


  getTaskInfo(){
    this.transfereData.emit(this.taskInfo)
  }

  getFormattedDate(date: any){
    let data = new Date(date)
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }
}
