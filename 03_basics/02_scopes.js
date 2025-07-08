var c=300    // here 'c' is in global scope 
let a=100

// and the variable declared in global scope is available to block scope or local scope

if(true) {
    let a=10        // }
    const b=20      // } here all the variables a,b,c is in 'local scope 'or 'block scope'
    c=30            // }
   //console.log("INNER:",a);
   

}
//console.log(a);
// console.log(b);
//console.log(c);  // ithe global scope cha 300 print n hota local scope cha ch 30 print honar mhanun aapan 'var' yse karat nahit jast



//++++++++++++++ scopes in fucntions ++++++++++++++++


function one(){
    const username="bhushan"

    function two(){
        const website="youtube"

        console.log(username);
    }
      //console.log(website);    // cant come outside of "function two's scope"
      
      two()
}

//one()




//++++++++++++++ scopes in  conditional statements ++++++++++++++++

if (true) {
    const username="bhushan"
     if (username==="bhushan") {
        const website=" youtube"

        //console.log(username + website);
     }
      // console.log(website);  // cant come outsiden from 'second if condition' 

}
    // console.log(username);  // cant come outisde from the 'first if condition'



    //++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++

    console.log(addOne(5))

    function addOne(num){
       return num+1
    }                  // here we can call the function before its initialisation 


   console.log(addTwo(5))

    const addTwo=function(num){
        return num+2
    }                  // here we can't call the function before itss initialisation  ----error yenar  

    