// primitive data types
// 7 types: String,Number,Boolean,null,undefined,symbol,BigInt

const Id=Symbol('123')
const anotherId=Symbol('123')

// console.log(Id===anotherId);


//Reference(non-primitive)
// array,objects,functions

const heros=["iron man","thor","hulk","captain america"];  // array

let myObj={
    
    // collection of different data types
};

const myFunction=function(){
    console.log("hello world"); // function definition
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(used in primitive data types) and Heap memory(used in non primitive data types)

let myYoutubename="hiteshchaudhary"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename); //O/P=>"hiteshchaudhary"
console.log(anothername); //O/P=>"chaiaurcode"


let userOne={
      email:"bhushan@gmail.com",
      upi:"bhushan@canara",
}

let userTwo=userOne

userTwo.email="rohit45@gmail.com"

console.log(userOne.email)
console.log(userTwo.email); // change in Heap(actual memory)       
    
    




