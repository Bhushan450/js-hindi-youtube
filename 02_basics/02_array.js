const marvel_Heros=["thor","iron man","spider man"]
const dc_Heros=["superman","flash","batman"]

marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

const allHeros=marvel_Heros.concat(dc_Heros)
// console.log(allHeros);

 const all_new_heros=[...marvel_Heros,...dc_Heros]
 //console.log(all_new_heros);
 

const another_array=[1,2,3,[4,5,6],7,8,[6,[7,8]]]

const real_another_array=another_array.flat(Infinity) // flat=> covert array into array, in one single array
console.log(real_another_array);

console.log(Array.isArray("bhushan")); // asking the question that the given data or value is array or not => boolean values
console.log(Array.from("hitesh")); // convert string or objects into array

console.log(Array.from({name:"hitesh"}));  // INTERESTING

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); // of=> it also converts into array













