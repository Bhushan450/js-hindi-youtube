
// function definition...
function saymyName(){
    console.log("b");
    console.log("h");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");    
}

//saymyName()   // function execution

// function definition
function addTwoNumbers(number1,number2){  // number1 & number2 is the parameters
    
    //console.log(number1+number2);  
}
addTwoNumbers(4,7)  //and passing the arguments into the functiion & execution the function  //4,7 are the arguments


function addTwoNumbers(number1,number2){ 
    
    let result=number1+number2
    return result
     //return number1+number2
      
}

result =addTwoNumbers(4,7)  
//console.log("result is:",result);

function loginUSerMessage(username="vaibhav"){

  if (username==undefined) {   // or we can use '!username' instead of username===undefined   // we can use === or == 
    console.log("please enter your username");
    return
  }
    return `${username} is just logged in`
}

//console.log(loginUSerMessage("bhushan"))
//console.log(loginUSerMessage())



function calculateCartPrice(...num1){  // when we use"..."(spread or rest operator) it took all the values from the parameter and put them all into an array
    return num1
}

//
// console.log(calculateCartPrice(50,200,700,400));


function calculateCartPrice2(val1,val2,...num1){  
    return num1
}

//console.log(calculateCartPrice2(50,100,300,500));  // here val1 returns 50,val2 returns 100 and num1 returns the rest all values that is 300 & 500


//+++++++++++++++++ Objects in Functions ++++++++++++++++++

const user ={
    username:"bhushan",
    price:145,
}

function handleObject(anyObject){

    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user)

// we can also give object as an argument as follows 

handleObject({
    username:"bhushan",
    price:167
})


//+++++++++++++++ Array in Function ++++++++++++++++++


const myArray=[100,200,300,400]

function returnSecondValue(anyArray){
    return anyArray[1]
}

//console.log(returnSecondValue(myArray));

//same as objects we can direct pass the array as an argument

console.log(returnSecondValue([100,200,300,400]));

