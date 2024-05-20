import { Component } from '@angular/core';

@Component({
  selector: 'app-user-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  imgSrc: string | ArrayBuffer | null = null;
  onFileSelected(event: Event){
    const file = (event.target as HTMLInputElement).files?.[0];
    if(file){
      const reader = new FileReader();
      reader.onload = ()=>{
        this.imgSrc = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }
}
