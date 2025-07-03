// Singleton
//Object.create  // use for creating the objects

// object literals

const mysym=Symbol("key1")

const jsUser={  // objects madhe ":" karunch value assign karachya ,"=" use karun naahi
    "full name":"bhushan mhaske",
    name:"bhushan",  // end la semicolon(,) lavane
    [mysym]:"mykey1",
    age:20,
    location:"shrigonda",
    email:"bhusahn67@gmail.com",
    isloggedIn:false,
    LastLoginDays:["monday","wednesday"]
}
    // console.log(jsUser.name); // acces the object
    // console.log(jsUser["name"]);
    // console.log(jsUser["full name"]);  
    // console.log(jsUser[mysym]);

    // changing the value of ibject
    jsUser.email="bhushanapple@gmail.com",

    // freezing the object so why we cannot change the value of an object
    //Object.freeze(jsUser) // here we freez the whole object
    jsUser.email="bhuhan76@googl.com",
    //console.log(jsUser);

    jsUser.greeting=function(){
        console.log("hello JS user")
    }

    jsUser.greetingtwo=function(){
        console.log(`hello JS user,${this.name}`) // this=> used two reference the same object variables
    }

    console.log(jsUser.greeting());
    console.log(jsUser.greetingtwo());
    
    


    

    
    
    
    

