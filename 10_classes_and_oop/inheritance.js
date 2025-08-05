class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("bhushan", "bhushan@google.com", "1234")
chai.addCourse()

 chai.logMe()
const masalaChai = new User("masalaChai")

 masalaChai.logMe()
 //masalaChai.addCourse()  // masala chai does not have access of addCourse function 

console.log(chai instanceof User);