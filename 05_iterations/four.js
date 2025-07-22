const myObject={
    js:'javascript',
    cpp:'c++',
    java:'java',
    swift:'swift by apple ',
}

for (const key in myObject) {     // For-in loop
    //console.log("keys:",key);
   // console.log(` ${key} is shortcut for ${myObject[key]}`);
    
    }

    const myArray=["java","ruby","js","cpp","py"]

    for (const key in myArray) {
        // console.log(`keys of array is ${key}`);  // it prints the keys of array that is zero based indexing
        // console.log(`values of array is ${myArray[key]}`);  // it prints the values of array 
        
    }
const map=new Map()
map.set('IN',"india")
map.set('UK',"united kingdom")  // ''= keys , ""= value of keys
map.set('FR',"france")

for (const key in map) {
     console.log(key);    // maps cannot  be iterable by for-in loop
    
}

