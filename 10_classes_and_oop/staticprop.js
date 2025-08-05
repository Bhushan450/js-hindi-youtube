class user{
    constructor(username){
     this.username=username
    }

    logMe(){
        console.log(`username:${this.username}`);  
    }

    static createId(){                  // static stops the access of creating the id / stops the access of createdId function 
        console.log(`123`);
        
    }
}

const bhushan=new user("vaibhav")
// bhushan.createId();              // we does not the access of createId function due to "static keyword"

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email

    }
}

const iPhone=new Teacher("bhushan","bhushan123@gmail.com")
iPhone.logMe()
iPhone.createId() // dont have this function acces due to static keywword 
