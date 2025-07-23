// For loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==5) {
        // console.log("5 is the best number ");
        
    }
    // console.log(element);
    
}  //console.log(element);   // cant access the element outside the for loop scope 


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop values: ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`inner loop values : ${j} and outer loop ${i}`);
        // console.log(i+ '*' +j+ '=' + i*j);
        
    }  
}

const myarray=["flash","batman","superman"]
// console.log("array length:",myarray.length);
for (let index = 0; index < myarray.length; index++) {  // jar aapan index<=myarray,length kela tr last value undefined yenar 
    const element = myarray[index];
    // console.log(element);
    
}

// for (let i = 1; i < 20; i++) {
//     if (i==5) {
//         console.log(" 5 is detected ");
//         break;                   // 'break' stops the loop when condition is satisfied 
//     }
//     console.log(`value of i is:`,i); 
//}


for (let i = 1; i < 20; i++) {
    if (i==5) {
        console.log(" 5 is detected ");
        continue;                   // 'continue' tya condition la sodun baki run karel
    }
    console.log(`value of i is:`,i); 
}

