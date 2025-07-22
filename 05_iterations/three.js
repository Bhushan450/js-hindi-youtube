// For of loop

// ["","","" ]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting="hello world !"

for (const greet of greeting) {
    if (greet==" ") {
        // console.log("space detected exit!!");
        break;  // continue
    }
    //console.log(`each character of greet:${greet}`);
    
}

//  MAPS

const map=new Map()
map.set('IN',"india")
map.set('UK',"united kingdom")  // ''= keys , ""= value of keys
map.set('FR',"france")
// map.set('IN',"india")  // duplicate value 

//console.log(map)

// Maps only contains 'unique' values it doesnt conatins duplicate values or the same values 


// for (const [key,value] of map) {   // [key,value ] = destructure the array 
//     console.log(key,':-',value);
    
// }

const myObject={
    name:"bhushan",
    surname:"mhaske",
    gav:"chandgaon",
}

// for (const [key,value] of myObject) {    // loops cannot be iterable by this method there are differnet merthods to iterate objects
//     console.log(key,':-',value);
    
// }