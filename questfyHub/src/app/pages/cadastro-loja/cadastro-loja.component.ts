import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { GiftsService } from '../../services/gifts.service';
import { environment } from '../../../environments/environment.development';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-cadastro-loja',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-loja.component.html',
  styleUrl: './cadastro-loja.component.css',
})
export class CadastroLojaComponent {
  imgSrc: string | ArrayBuffer | null = null;
  createGift!: FormGroup;
  company: any;
  imgFile: any;

  constructor(
    private formBuilder: FormBuilder,
    private giftService: GiftsService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    environment.logged.then(async (user) => {
      console.log(user); //!Apagar dps
      this.company = user.companyUser.companyCode
    });

    this.createGift = this.formBuilder.group({
      giftName: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
      img: new FormControl(''),
    });
  }
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.imgFile = file;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imgSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
    this.createGift.patchValue({ img: file });
  }

  async onSubmit() {
    const data = new FormData();
    data.append('giftName', this.createGift.get('giftName')!.value);
    data.append('price', this.createGift.get('price')!.value);
    data.append('category', this.createGift.get('category')!.value);
    data.append('img', this.createGift.get('img')!.value);
    data.append('company', this.company);
    console.log(data.get('company'))
    try{
      this.giftService.createGift(data)
      Swal.fire({
        title: 'Item criado!',
        text: '',
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#31357C',
      });
    }catch{}

    
  }

  teste(){
    console.log(this.company)
  }
}
