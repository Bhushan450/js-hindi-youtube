const promiseOne= new Promise( function(resolve,reject){        // new=> gives the new instance
      // Do async task
      // DB calls ,cryptography,network calls 

      setTimeout(function(){
        console.log("async task is completed");  
        resolve();                                 // when we call the resolve() then is connects with the (.then) 
      },1000)                                      // setTimeout chya function() ne ji value return keli ti value '.then' madhe jaate 
})      

promiseOne.then( function(){
    console.log("promise is consumed");
    
})


// when promise is not stored into variable


new Promise( function(resolve,reject){
 setTimeout(function(){
        console.log("async task 2");  
        resolve();                                 
      },1000)
}).then( function(){
    console.log("async 2 resolved");
    
})
   
            

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){    // whatever the parameters we are passing in the resolve() that parameters are passsing into the function{user}
    console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
     let error=true  // false
     if(!error){
        resolve({username:"bhushan",password:"123"})
     }
     else{
        reject('ERROR SOMETHING WENT WRONG')
     }
    },1000)
})

promiseFour.then( (user)=>{              // catch() handles when promise is rejected 
   console.log(user);
   return user.username
   
}).then( (username)=>{          // varchya .then ni ji value return keli ti value khalchya .then chya (username) madhe aali 
    console.log(username);
    
}).catch( function(error){
    console.log(error);
    
}).finally( ()=>{console.log('promise is either resolved or rejected ')})



const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
     let error=true  // false
     if(!error){
        resolve({username:"javascript",password:"123"})
     }
     else{
        reject('ERROR:JS WENT WRONG')                // reject=error
     }
    },1000)
})

// async - await  => we can use this instead of then(),cathc()

async function consumepromiseFive(){
    try {
        const reponse =await promiseFive
        console.log(reponse);
        
    } catch (error) {
        console.log(error);
        
    }
    
}

consumepromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
