export class User{
    public fullname: any;
    public username: any;
    public email: any;
    public password: any;
    public position: any;

    constructor()
    constructor(fullname: string, username: string, email: string, password: string, position: string)
    constructor(fullname?: string, username?: string, email?: string, 
        password?: string, position?: string) {
        
            this.fullname = fullname;
            this.username = username;
            this.email = email;
            this.password = password;
            this.position = position
    }

    
}
