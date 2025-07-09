
const user={
     username:"bhushan",
     price:199,

     welcomeMessage:function(){
      console.log(`${this.username},hello welcome to the website`);  // this=> refers to the same objects current context
      //console.log(this);
      
     } 
}
// user.welcomeMessage()
// user.username="vaibhav"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//      let username="bhushan"
//      console.log(this.username);    // we cant use 'this operator' in function to access the values
     
// }
  //chai()


//   const chai= function(){
//      let username="bhushan"
//      console.log(this); 
//   }

//   chai()


//++++++++++++++++ arrow function ++++++++++++++++

// const chai= ()=>{            // "=>" is called as a arrow function 
//      let username="bhushan"
//      console.log(this); 
//   }

//  chai()


// const addTwo= (num1,num2)=>{   // example on arrow function  
//    return num1+num2
// }

// console.log(addTwo(4,7));


// arrow functioon can also be declared like this
 //const addTwo= (num1,num2)=>num1+num2        // no use of 'return' keyword

 // arrow function can also declared like this 
 
 //const addTwo= (num1,num2)=>(num1+num2 )      


 const addTwo= (num1,num2)=>({username:"bhushan"})   // wrap the object into a '()'

console.log(addTwo(4,7));
