let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let number = [3, 1, 4];
number.sort()
console.log(number);

// Natural Sorting, lexicographic Sorting)
let numberArray = [4, 2, 1, 5, 90, 43, 7, 23];
numberArray.sort();
console.log("Natural Sorted number array: " + numberArray);


let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);

nums.sort((a, b) => a - b); // Ascending
console.log("Sorted Array on Ascending order: " + nums);
nums.sort((a, b) => b - a);//Decending
console.log("Sorted Array on Ascending order: " + nums);

