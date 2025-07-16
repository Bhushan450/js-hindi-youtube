// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log("DB Connected");  // wrap all the function into parenthesis and instead of callling like 'chai()',use only '()'
}) ();   // iife ends with semicolon

// syntax of iife
// (write the function definition here) ()

 ((name)=> {
    console.log(`DB Connected two ${name}`);  
}) (`bhushan`)