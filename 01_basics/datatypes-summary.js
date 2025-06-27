// primitive data types
// 7 types: String,Number,Boolean,null,undefined,symbol,BigInt

const Id=Symbol('123')
const anotherId=Symbol('123')

console.log(Id===anotherId);


//Reference(non-primitive)
// array,objects,functions

const heros=["iron man","thor","hulk","captain america"];  // array

let myObj={
    
    // collection of different data types
};

const myFunction=function(){
    console.log("hello world"); // function definition
}