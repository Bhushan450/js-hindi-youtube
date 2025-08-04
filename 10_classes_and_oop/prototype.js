// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh=function(){           // here we inject prototype in object so it is available to all arrays,strings,functions etc.
    console.log(`hitesh is present is all objects`);  
    
}

Array.prototype.bhushan=function(){           // here we inject prototype into ann array so it is only available to the array 
    console.log(`bhushan is present here`);
    
}

// heroPower.hitesh();   
// myHeros.hitesh();

// myHeros.bhushan()
// heroPower.bhushan()


// **** Inheritance ****

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   // access the properties from uppar object
}

Teacher.__proto__ = User  // teacher object access the properties from User object


// Modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)  // TeachingSupport will access the all properties from Teacher


let anotherString="bhushan         "

String.prototype.trueLength=function(){
    console.log(this);
    console.log(`length of string is :${this.trim().length}`);
    
}

anotherString.trueLength();
"vaibhav".trueLength();  // this will give us the lentgh of "vaibhav" that is =7
"aditya".trueLength();

