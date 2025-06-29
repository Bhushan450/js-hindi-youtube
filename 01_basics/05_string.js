const name="bhushan"
const repoCount=34

//console.log(name+repoCount+" value"); // this technique of writing a string is OUTDATED

console.log(`hello my name is ${name} and my repository count is ${repoCount}`);

const gameName= new String("bhushan")

//console.log(gameName[0]);
//console.log(gameName.__proto__);  // . is used to access the different methods

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3)) // to find at which position which alphabet is located
//console.log(gameName.indexOf('a')); // to find the position of an alphabet

const newString=gameName.substring(0,3)  // divides the string according to the input
//console.log(newString);

const anotherString=gameName.slice(-6,3) // can give negative numbers
//console.log(anotherString);

const stringOne="   iron man    "
//console.log(stringOne);
//console.log(stringOne.trim()); // trim=> cuts the unwanted spaces from the string 

const url="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','_'));

console.log(url.includes('sundar'));  // checks the given keyword is present in thr url or not

const stringTwo="bhushan-santosh-mhaske"
console.log(stringTwo.split('-'));


















