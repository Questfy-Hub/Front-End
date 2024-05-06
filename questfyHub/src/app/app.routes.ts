import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent, pathMatch:"full"},
    {path: "home", component: HomeComponent, children:[
        {path: "users", component: UsuariosComponent, pathMatch:"full"},
        {path: "register", component: CadastroComponent, pathMatch: "full"}
    ]},
    {path:"", redirectTo: "login", pathMatch:"full"}
];
