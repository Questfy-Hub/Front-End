import { Task } from "../app/models/tasks";
import { User } from "../user";

const users: User[] = [
    new User('Roberto Macapá', 'Robs', 'robsmacapa@gmail.com','projects', 'Gerente de projetos'),
    new User('Anginho Sergipe', 'Angel', 'angelsrp@gmail.com', 'assistenceBuild' ,'Assistente de Obra'),
    new User('Rebeca Barueri', 'Rebar', 'becabarueri@gmail.com', 'admAssistence' ,'Assistente Administrativa'),
    new User('Kelly Organograma', 'Kell' ,'kellorga@gmail.com', 'adm', 'Administrador de Sistemas'),
    new User('Roberto Macapá', 'Robs', 'robsmacapa@gmail.com','projects', 'Gerente de projetos'),
    new User('Anginho Sergipe', 'Angel', 'angelsrp@gmail.com', 'assistenceBuild' ,'Assistente de Obra'),
    new User('Rebeca Barueri', 'Rebar', 'becabarueri@gmail.com', 'admAssistence' ,'Assistente Administrativa'),
    new User('Kelly Organograma', 'Kell' ,'kellorga@gmail.com', 'adm', 'Administrador de Sistemas'),
    new User('Roberto Macapá', 'Robs', 'robsmacapa@gmail.com','projects', 'Gerente de projetos'),
    new User('Anginho Sergipe', 'Angel', 'angelsrp@gmail.com', 'assistenceBuild' ,'Assistente de Obra'),
    new User('Rebeca Barueri', 'Rebar', 'becabarueri@gmail.com', 'admAssistence' ,'Assistente Administrativa'),
    new User('Kelly Organograma', 'Kell' ,'kellorga@gmail.com', 'adm', 'Administrador de Sistemas')
]

const tasks: Task[] = [
    new Task(
        "Task 1 - Teste", "Task para teste de logica", new Date(2024,2,7), new Date(), new Date(2024, 6, 9), 3, "Ap"
    ),
    new Task(
        "Task 2 - Teste", "Task para teste de logica", new Date(2024,2,7), new Date(), new Date(2024, 6, 9), 3, "At"
    ),
    new Task(
        "Task 3 - Teste", "Task para teste de logica", new Date(2024,2,7), new Date(), new Date(2024, 6, 9), 3, "C"
    ),
    new Task(
        "Task 4 - Teste", "Task para teste de logica", new Date(2024,2,7), new Date(), new Date(2024, 6, 9), 3, "P"
    ),
    new Task(
        "Task 5 - Teste", "Task para teste de logica", new Date(2024,2,7), new Date(), new Date(2024, 6, 9), 3, "P"
    ),
    new Task(
        "Task 6 - Teste", "Task para teste de logica", new Date(2024,2,7), new Date(), new Date(2024, 6, 9), 3, "C"
    )
]


export const environment = {
    users, tasks
};