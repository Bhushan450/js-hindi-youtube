class user {
    constructor(email,password){
        this.email=email
        this.password=password
    }
 
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    get password(){
        return this._password.toUpperCase()
    }
                                // getter aalyavar setter pn lihavach lagato

    set password(value){
        this._password=value
    }
}

const chai =new user("b@bhushan.ai","abc123")
console.log(chai.password);
console.log(chai.email);
