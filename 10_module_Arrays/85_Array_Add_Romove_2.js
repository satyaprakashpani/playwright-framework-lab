let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log("push(4, 5, 6): " + arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1);
console.log("After splice(2, 1): " + arr);

arr.splice(2, 0, 99); // add
console.log("splice(2, 0, 99):  " + arr);
arr.splice(2, 1, 90); // repace
console.log("splice(2, 1, 99): " + arr);

arr.splice(1, 2, 10, 20);
console.log("Array After splice(1, 2, 10, 20): " + arr);