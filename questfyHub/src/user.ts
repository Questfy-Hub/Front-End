export class User{
    public fullname: any;
    public username: any;
    public email: any;
    public password: any;
    public role: any;
    public cpf: any;
    public img: any;

    constructor()
    constructor(fullname: string, username: string, email: string, password: string, role: string, cpf: string, img:any)
    constructor(fullname?: string, username?: string, email?: string, 
        password?: string, role?: string,cpf?: string, img?: any) {
        
            this.fullname = fullname;
            this.username = username;
            this.email = email;
            this.password = password;
            this.role = role;
            this.cpf = cpf;
            this.img = img;
    }

    
}
