/* Array Declaration in JavaScript
   -------------------------------
   Arrays in JS can be declared using:
   1. Array literal: const arr = []
   2. Array constructor: new Array()
   3. Array.of() method
*/

// 1. Array Literal (Most Common)
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null, { a: 1 }];
let empty = [];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);
console.log("Empty:", empty);

// 2. Array Constructor
let arr1 = new Array(3);        // Creates array with 3 empty slots
let arr2 = new Array(1, 2, 3);  // Creates [1, 2, 3]

console.log("arr1:", arr1);
console.log("arr2:", arr2);

// 3. Array.of()
let arr3 = Array.of(3);         // Creates [3]
let arr4 = Array.of(1, 2, 3);   // Creates [1, 2, 3]

console.log("arr3:", arr3);
console.log("arr4:", arr4);

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// Modifying elements
fruits[1] = "Blueberry";
console.log("Modified fruits:", fruits);

let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
// length = 3, Index - 0,1,2


let arr = [10, 20, 30, 40]; // 0-3: 4

console.log(arr[0]);
console.log(arr[3])
console.log(arr[4]); // undefined

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.