let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);

const user = { name: "John" };
const details = { age: 25 };

const merged = { ...user, ...details };
console.log(merged);
console.log("Merged Array without stringify: " + merged);
console.log("Merged Array : " + JSON.stringify(merged));