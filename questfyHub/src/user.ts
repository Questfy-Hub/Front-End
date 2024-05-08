export class User{
    public fullname: any;
    public username: any;
    public email: any;
    public password: any;
    public role: any;

    constructor()
    constructor(fullname: string, username: string, email: string, password: string, role: string)
    constructor(fullname?: string, username?: string, email?: string, 
        password?: string, role?: string) {
        
            this.fullname = fullname;
            this.username = username;
            this.email = email;
            this.password = password;
            this.role = role
    }

    
}
