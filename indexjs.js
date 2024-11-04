// 1 Number
// 2 String
// 3 Boolean
// 4 Object [1,2,3], {a : b}
// 5 undefined
// 6 null
// 7 Symbol
// 8 BigInt

// Function
// NaN

let myNumber = 5;
const myString = [1,3,4];

var vad = 5; // старый

console.log(myNumber);

function myFunction(a,b) {
    return a + b
}

const myFunction = (a,b) => a + b;
const myFunction = (a,b) => {
    return a + b
};

// doka ; mdn javascript

// [1,2,3] === [1,2,3] -> false ; память компа

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }