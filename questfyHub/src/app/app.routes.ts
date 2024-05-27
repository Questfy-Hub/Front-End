import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { CadastroTarefasComponent } from './pages/cadastro-tarefas/cadastro-tarefas.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent, pathMatch:"full"},
    {path: "", component: HomeComponent, children:[
        {path: "users", component: UsuariosComponent, pathMatch:"full"},
        {path: "users/register", component: CadastroComponent, pathMatch: "full"},
        {path: "tasks", component: TarefasComponent, pathMatch:"full"},
        {path: "tasks/register", component:CadastroTarefasComponent, pathMatch: "full"},
        {path: "store", component: StoreComponent, pathMatch: "full"}
    ]},
    {path:"", redirectTo: "login", pathMatch:"full"}
];
