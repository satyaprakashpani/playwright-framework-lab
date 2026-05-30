let scores = [45, 82, 91, 60, 73, 20];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

let halfCentury = scores.map(s => s >= 50 ? "HalfCentury" : "No Half Century");
console.log(halfCentury);

const arr = [1, 2, 3];
const result = arr.map(x => x * 10);


const arr1 = [1, 2, 3];
const result1 = arr1.map(x => {
    return x * 2;
});
console.log("result1: " + result1);
console.log("arr1: " + arr1);

//filter
// filter — keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

let numbers = [2, 4, 5, 8, 9, 23, 54, 56, 67];
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers in teh arary :" + evenNumbers);