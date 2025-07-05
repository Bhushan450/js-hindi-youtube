//const tinderUSer= new Object()  //this is also a object ,nut this is a singleton object
const tinderUSer={} // this is a object but not a singleton object

tinderUSer.id="xyz456"
tinderUSer.name="sammy"
tinderUSer.isLoggedIn=false

//console.log(tinderUSer);

const regularUser={
    email:"bhushan90@gamil.com",
    fullname:{
        username:{
            fist_name:"bhushan",
            last_name:"mhaske",
        }
    }
}

//console.log(regularUser.fullname.username.fist_name);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj3={obj1, obj2}
//const obj3=Object.assign({},obj1, obj2) we can use this or either step number '29' also

const obj4={...obj1,...obj2,...obj3}   //'...'=> this is called as spread operator
//console.log(obj4);

const users=[            // this is condition when user comes from the database

    {
        id:1,
        email:"b@gmail.com"
    },
    {
        id:1,
        email:"b@gmail.com",
    },
    {
        id:1,
        email:"b@gmail.com",
    },
    {     
    },
    {      
    },
    {      
    },
    {      
    },
]

users[1].email

// console.log(Object.keys(tinderUSer));  /// returns an array of a  object properties
// console.log(Object.values(tinderUSer)); // returns the values of the object properties
// console.log(Object.entries(tinderUSer)); 
// console.log(tinderUSer.hasOwnProperty('isLoggedIn'));  // asks to object that u have this proprty or not - results in the boolen values

// ++++++++++++++Destructure the object+++++++++++
const course={
    coursename:"js-hindi",
    price:1000,
    courseInstructor:"bhushan",
}

const{courseInstructor,price}=course  // destructure the object
console.log(courseInstructor,price);


// {
//     "name":"bhushan",
//     "coursename":"js in hindi",
//     "price":"free",
// }

[
    {},
    {},
    {},
]




