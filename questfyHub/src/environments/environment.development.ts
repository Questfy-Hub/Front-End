import { User } from "../user";

const users: User[] = [
    new User('Roberto Macapá', 'Robs', 'robsmacapa@gmail.com','projects', 'Gerente de projetos'),
    new User('Anginho Sergipe', 'Angel', 'angelsrp@gmail.com', 'assistenceBuild' ,'Assistente de Obra'),
    new User('Rebeca Barueri', 'Rebar', 'becabarueri@gmail.com', 'admAssistence' ,'Assistente Administrativa'),
    new User('Kelly Organograma', 'Kell' ,'kellorga@gmail.com', 'adm', 'Administrador de Sistema')
]


export const environment = {
    users
};