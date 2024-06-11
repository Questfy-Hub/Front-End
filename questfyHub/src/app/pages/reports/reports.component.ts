import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { count } from 'rxjs';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  userList: any

  constructor(private userService: UserService){}
  async ngOnInit() {
    let user = await environment.logged
    this.userList = await this.userService.getUsersByGestor(user.fullname)
    console.log(this.userList)
    const ctx1 = <HTMLCanvasElement>document.getElementById('entregas');
    const ctx2 = <HTMLCanvasElement>document.getElementById('atrasadas');
    const ctx3 = <HTMLCanvasElement>document.getElementById('all');
    const ctx4 = <HTMLCanvasElement>document.getElementById('line');
    //Criando grafico entregue x pendente
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Tarefas'],
        datasets: [
          {
            label: 'Entregue',
            data: [46],
            backgroundColor: '#0066FF',
          },
          {
            label: 'Pendetes',
            data: [20],
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
    });

    //Criando grafico entregue x atrasada
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Tarefas'],
        datasets: [
          {
            label: 'Entregue',
            data: [46],
            backgroundColor: '#0066FF',
          },
          {
            label: 'Atrasadas',
            data: [20],
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
    });
    //Criando grafico de pizza
    new Chart(ctx3, {
      type: 'pie',
      data: {
        labels: ['Entregues', 'Aprovados', 'Pendentes', 'Em espera'],
        datasets: [
          {
            label: 'Tarefas',
            data: [46, 20, 10, 22],

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
    });
    //Criando Grafico de Linhas
    new Chart(ctx4, {
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
    });
  }
}
