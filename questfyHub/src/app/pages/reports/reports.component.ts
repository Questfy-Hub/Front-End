import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { count } from 'rxjs';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment.development';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  userList: any
  userSelected: any
  tarefasList: any

  chartList: any[] = []

  entregue: any[] = []
  onhold: any[] = []
  atrasada: any[] = []
  pendente: any[] = []
  aprovadas: any[] = []

  constructor(private userService: UserService, private taskService: TaskService){}
  async ngOnInit() {
    let user = await environment.logged
    this.userList = await this.userService.getUsersByGestor(user.fullname)
    const selector = (document.getElementById("monthSelector")) as HTMLSelectElement;
    this.taskService.getTaskByUsernameAndMonth(user.username, Number(selector.value))


    const ctx1 = <HTMLCanvasElement>document.getElementById('entregas');
    const ctx2 = <HTMLCanvasElement>document.getElementById('atrasadas');
    const ctx3 = <HTMLCanvasElement>document.getElementById('all');
    const ctx4 = <HTMLCanvasElement>document.getElementById('line');

    //Criando grafico entregue x pendente
    this.chartList.push(new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Tarefas'],
        datasets: [
          {
            label: 'Entregue',
            data: [this.entregue.length],
            backgroundColor: '#0066FF',
          },
          {
            label: 'Pendetes',
            data: [this.pendente.length],
            backgroundColor: '#FCCF03',
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },

        plugins: {
          legend: {
            display: true,
            align: 'end',
            position: 'top',
          },
          title: {
            display: true,
            text: 'Tarefas Entregues x Pendentes',
            position: 'top',
            align: 'start',
            font:{
              size: 20
            }
          },
        },
      },
    }));

    //Criando grafico entregue x atrasada
    this.chartList.push(new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Tarefas'],
        datasets: [
          {
            label: 'Entregue',
            data: [this.entregue.length],
            backgroundColor: '#0066FF',
          },
          {
            label: 'Atrasadas',
            data: [this.atrasada.length],
            backgroundColor: '#FF0000',
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            align: 'end',
            position: 'top',
          },
          title: {
            display: true,
            text: 'Tarefas Entregues x Atrasadas',
            position: 'top',
            align: 'start',
            font:{
              size: 20
            }
          },
        },
      },
    }));
    //Criando grafico de pizza
    this.chartList.push(new Chart(ctx3, {
      type: 'pie',
      data: {
        labels: ['Entregues', 'Aprovados', 'Pendentes', 'Em espera'],
        datasets: [
          {
            label: 'Tarefas',
            data: [this.entregue.length, this.aprovadas.length, this.pendente.length, this.onhold.length],

            backgroundColor: [
              'rgb(0, 102, 255)',
              'rgb(0, 199, 0)',
              'rgb(252, 207, 3)',
              'rgb(255, 168, 0)',
            ],
            borderColor: 'transparent',
            hoverOffset: 4,
          },
        ],
      },
      options:{
        responsive: false,
        plugins: {
          legend: {
            display: true,
            align: 'start',
            position: 'right',
            labels: {
              textAlign: 'left'
            }
          },
          title: {
            display: true,
            text: 'Tarefas Entregues x Atrasadas',
            position: 'top',
            align: 'start',
            font: {
              size: 20,
            },
          }
        },
      }
    }));
    //Criando Grafico de Linhas
    this.chartList.push(new Chart(ctx4, {
      type: 'line',
      data: {
        labels: Array.from(Array(11).keys()),
        datasets: [
          {
            label: 'Entregues',
            data: [65, 59, 80, 81, 56, 55, 40, 20, 10, 23, 15],
            fill: false,
            borderColor: 'rgb(0, 102, 255)',
            backgroundColor: 'rgb(0, 102, 255)',
            tension: 0.1,
          },
          {
            label: 'Pendentes',
            data: [30, 25, 10, 55, 70, 20, 15, 23, 54, 23, 12],
            fill: false,
            borderColor: 'rgb(252, 207, 3)',
            backgroundColor: 'rgb(252, 207, 3)',
          },
          {
            label: 'Aprovadas',
            data: [15, 10, 5, 23, 62, 21, 10, 2, 30, 33, 55],
            fill: false,
            borderColor: 'rgb(0, 199, 0)',
            backgroundColor: 'rgb(0, 199, 0)',
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: true,
            align: 'end',
            position: 'top',
          },
          title: {
            display: true,
            text: 'Entregues x Pendentes x Aprovadas',
            position: 'top',
            align: 'start',
            font: {
              size: 20,
            },
            padding: {
              bottom: 30,
            }
          }
        }
      }
    }));
  }

  async onInfoChange(){
    this.pendente = []
    this.atrasada = []
    this.onhold = []
    this.entregue = []
    this.aprovadas = []
    this.userSelected = ((document.getElementById("userSelection")) as HTMLSelectElement).value
    const selector = (document.getElementById("monthSelector")) as HTMLSelectElement;
    this.tarefasList = await this.taskService.getTaskByUsernameAndMonth(this.userSelected, Number(selector.value))
    if(this.tarefasList.length > 0){
      this.tarefasList.forEach((task: any) => {        
        switch(task.statusTask.statusCode){
          case 1:
            if(new Date(task.endLineDate) < new Date()){
              this.atrasada.push(task)
            }
            this.pendente.push(task);
            break;
          case 2:
            this.onhold.push(task)
            break;
          case 3:
            if(new Date(task.endLineDate) < new Date()){
              this.atrasada.push(task)
            }
            break;
          case 4: 
            this.entregue.push(task);
            break;
          case 5: 
            this.aprovadas.push(task);
            break;
        }
      });
    }
    this.updateData()
  }

  updateData(){
    this.chartList.forEach(element => {
      console.log(element.data)
    });
    //Entregue Update
    this.chartList[0].data.datasets[0].data[0] = this.entregue.length
    this.chartList[1].data.datasets[0].data[0] = this.entregue.length
    this.chartList[2].data.datasets[0].data[0] = this.entregue.length
    //Pendente
    this.chartList[0].data.datasets[1].data[0] = this.pendente.length 
    this.chartList[2].data.datasets[0].data[2] = this.pendente.length

    //Atrasada
    this.chartList[1].data.datasets[1].data[0] = this.atrasada.length

    //Em espera
    this.chartList[2].data.datasets[0].data[3] = this.onhold.length

    //Aprovadp
    this.chartList[2].data.datasets[0].data[1] = this.aprovadas.length
    //Atualizando tudo
    this.chartList[0].update()
    this.chartList[1].update()
    this.chartList[2].update()
    this.chartList[3].update()
  }
  
}


