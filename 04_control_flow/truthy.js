
const userEmail = []

if (userEmail) {
    console.log("got user email");
}
else {
    console.log("dont have user email");

}


//   falsy values
// false, 0, -0, BigInt 0n , "",null, undefined , NaN


// truthy values 
// "0", 'false ,"false", " "    =>  anything inside string is a truthy values 
// [], {}, function(){} -empty function


if (userEmail.length === 0) {
   // console.log("array is empty");

}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    //console.log("object is empty");

}


// Nulish coalescing operator(??): null undefined


let val1
//val1=5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 23
val1= undefined ?? 10 ?? 100  // undefined chya nantr first value aahe tich assign honar
console.log(val1);

// ternary operator => (condition) ? true :false

const teaPrice=45

teaPrice>=35 ? console.log("tea is expensive"): console.log("tea is cheap")



