// JS Engine
// LINE BY LINE, , JIT Compilation

console.log("greting before declaration->" + greeting);
var greeting = "Hello";
console.log("greting after declaration->" + greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log("a before declaration -> " + a);
var a = "Pramod";
console.log("a after declaration :" + a);