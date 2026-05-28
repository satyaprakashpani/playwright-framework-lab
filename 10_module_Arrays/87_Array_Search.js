let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found
results.indexOf("fail"); //1
results.indexOf("skip");        // -1

// lastIndexOf — searches from the end
results = ["pass", "fail", "pass", "fail", "error", "fail"];
console.log("results Array: " + results)
let lastIndexOfFail = results.lastIndexOf("fail");    // 4
console.log(lastIndexOfFail);
console.log("Index of first fail: " + results.indexOf("fail"));

console.log("results.includes('error'): " + results.includes("error"));//true
console.log("results.includes('skip'): " + results.includes("skip"));//false

// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);

// findIndex
console.log(nums.findIndex(n => n > 20)); // 1, 2, 3

console.log(nums.findLast(n => n > 20)); // 45] 

console.log(nums.findLastIndex(n => n > 20));// 3
