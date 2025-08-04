const user={
    username:"bhushan",
    loginCount:8,
    loggedIn:"true",

    getUserDetails: function(){
        // console.log("get user details from database");
        console.log(`${this.username}`);   // this=> gives the current object context 
         console.log(this);                 // here 'this' gives the whole context of objcet(gives whole object) 
        
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);                 // 'this' this this in global scope so it stores the empty objcet 


// **** "new" is a constructor fucntion ****
// it creates a new  instance(copy of that task)

// const promise1=new Promise()
// const date=new Date()

function User(myusername,loggedInCount,isLOggedIn){
    this.username=myusername;                     // here "this" gives the context of functions paramerters 
    this.loggedInCount=loggedInCount;
    this.isLOggedIn=isLOggedIn;
    // console.log(this);

    this.grettings=function(){
        console.log(`welcome ${this.username}`);
    }   

    return this;
}

const userOne=new User("bhushan",12,true)   // if we not use "new" keyword thrn values of userTwo will overright the values of userOne
const userTwo=new User("sanket",10,false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);


/*
new & this keyword-
1.new object or instance will created 
2.constructor function will call due to new keyword
3.this keyword injects parameters into the actual variable
*/



