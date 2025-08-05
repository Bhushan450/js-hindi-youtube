const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);  // not writable,enumerable,configurable -= thats why we cannot change the value of pi 


// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

const myObject=Object.create(null)   // create is called as a "factory function" cause it is inbuilt function(property)

const chai={
    name:"ginger chai",
    price:"250",
    isAvailable:true,

    orderchai:function(){
        console.log("code fat gaya");
    }  
}
//    console.log(chai);

   console.log(Object.getOwnPropertyDescriptor(chai,"name"));

   Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,    // enumeration false mhanje loop lavu nahi shakat tya property la 
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value!=='function') {
        console.log(`${key} : ${value}`);
        
    }
    
}
   


