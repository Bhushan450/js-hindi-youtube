
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
    
//    let result=number1+number2
//     return result
     return number1+number2
      
}

result =addTwoNumbers(4,7)  
//console.log("result is:",result);

function loginuserMessage(username){

    if (username==undefined) {
        console.log("please enter the username");
        return 
    }
    return `${username} is just logged in`

}

console.log(loginuserMessage());


