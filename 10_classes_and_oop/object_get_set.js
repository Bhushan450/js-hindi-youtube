const user={
    _email:"bhushan@apple.com",
    _password:"abc123",

    get email(){
      return `${this._email.toUpperCase()}`

    },

    set email(value){
      this._email=value
    },

    get password(){
      return `${this._password.toUpperCase()}`
    },

    set password(value){
      this._password=value
    }

}

const tea= Object.create(user)
console.log(tea.email);

