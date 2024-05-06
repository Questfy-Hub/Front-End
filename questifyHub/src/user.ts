export class User{
    fullname: string;
    username: string;
    email: string;
    password: string;
    position: string;

    constructor(fullname: string, username: string, email: string, password: string ,position: string){
        this.fullname = fullname;
        this.username = username;
        this.position = position;
        this.password = password
        this.email = email;
    }

    
}
