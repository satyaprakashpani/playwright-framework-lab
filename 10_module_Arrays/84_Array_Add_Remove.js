let arr = [1, 2, 3];
console.log("arr: " + arr);

// Add to END
arr.push(4);
console.log("After Push(4): " + arr);

// Remove from END
arr.pop();
console.log("After Pop() :" + arr);

arr.push(5, 6, 9, 10);
console.log("arr.push(5, 6, 9, 10): " + arr);

// Add to BEGINNING
arr.unshift(20);
console.log("unshift(20) :" + arr);

// Remove from BEGINNING
arr.shift();
console.log("After shift(): " + arr);

console.log("Current state of Array arr : " + arr);
arr.unshift(100);
console.log("arr.unshift(100): " + arr);
arr.shift();
console.log("arr.shift(): " + arr);
