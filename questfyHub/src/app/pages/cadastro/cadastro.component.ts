import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';
import { User } from '../../../user';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-user-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  imgSrc: string | ArrayBuffer | null = null;
  createUser!: FormGroup;
  imgFile: any;
  errMsg: string = '';
  company: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.companyService.getCompanies()
      .then(async resp =>{
        const options:any = {}
        resp.forEach((item: any)=>{
          options[item.companyCode] = item.companyName
        })
        console.log(options)
          const {value: company} = await Swal.fire({
            title: "Selecione a empresa",
            input: "select",
            inputOptions: options,
            inputValidator: (value) =>{
              return new Promise((resolve) =>{
                resolve();
              })
            },
            inputPlaceholder: "Nome da Compania"
          })
        if (company){
          this.company = company;
          console.log(this.company)
        }
      })

    this.createUser = this.formBuilder.group({
      fullname: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      cpf: new FormControl(''),
      role: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
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
    this.createUser.patchValue({ img: file });
  }

  validSubmit(): boolean {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.(com|com\.br|br)$/
    if (
      this.createUser.get('password')!.value !=
      this.createUser.get('confirmPassword')!.value
    ) {
      this.errMsg = 'Senhas não correspondem';
      Swal.fire({
        title: 'Senhas não correspondem',
        text: 'Digite a senha novamente',
        icon: 'error',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#31357C',
      });
      return false;
    }
    if(!pattern.test(this.createUser.get('email')!.value)){
      this.errMsg = 'Senhas não correspondem';
      Swal.fire({
        title: 'Email invalido',
        text: 'Digite o email novamente',
        icon: 'error',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#31357C',
      });
      return false
    }

    if(this.company == null){
      this.companyService.getCompanies()
      .then(async resp =>{
        const options:any = {}
        resp.forEach((item: any)=>{
          options[item.companyCode] = item.companyName
        })
        console.log(options)
          const {value: company} = await Swal.fire({
            title: "Selecione a empresa",
            input: "select",
            inputOptions: options,
            inputValidator: (value) =>{
              return new Promise((resolve) =>{
                resolve();
              })
            },
            inputPlaceholder: "Nome da Compania"
          })
        if (company){
          this.company = company;
          console.log(this.company)
        }
      })
      return false
    }




    return true;
  }

  onSubmit() {
    if (this.validSubmit()) {
      const user = new User(
        this.createUser.get('fullname')?.value,
        this.createUser.get('username')?.value,
        this.createUser.get('email')?.value,
        this.createUser.get('cpf')?.value,
        this.createUser.get('role')?.value,
        this.createUser.get('password')?.value,
        this.createUser.get('img')?.value
      );

      const data = new FormData();
      data.append('fullname', this.createUser.get('fullname')?.value);
      data.append('username', this.createUser.get('username')?.value);
      data.append('email', this.createUser.get('email')?.value);
      data.append('cpf', this.createUser.get('cpf')?.value);
      data.append('role', this.createUser.get('role')?.value);
      data.append('password', this.createUser.get('password')?.value);
      data.append('img', this.createUser.get('img')?.value);
      data.append('company', this.company);
      console.log(data);
      this.userService.teste(data);

      Swal.fire({
        title: 'Usuário criado!',
        text: '',
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#31357C',
      })
    }
  }
}
