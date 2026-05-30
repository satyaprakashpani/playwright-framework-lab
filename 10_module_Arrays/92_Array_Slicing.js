// Slicing & Combining
let arr = [1, 2, 3, 4, 5];
//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

console.log(arr.slice(1, 2)); // ( start, end-1) //2
console.log(arr.slice(1, 3)); //2,3
console.log(arr.slice(1, 4)); //2,3,4
console.log(arr.slice(1, 5)); //[ 2, 3, 4, 5 ]
console.log(arr.slice(1, 10));//[ 2, 3, 4, 5 ] No Error
console.log(arr.slice(2));//[ 3, 4, 5 ]

//start from the -1 and till 2. 
console.log(arr.slice(-2));

console.log(arr.slice(0));

//Splice() - remove the elements from starting point to no of element to b deleted 
// and return the array of deleted elements
let mainArr = [10, 20, 30, 40, 50];
console.log("Main Array: " + mainArr);
let removedArr = mainArr.splice(1, 2);   // remove 2 from index 1
console.log("Removed Array: " + removedArr);  // [20, 30]
console.log("Main Array: " + mainArr); 