/* Array Concepts in JavaScript
   ----------------------------
   Common array operations and concepts for QA automation:
   - push, pop, shift, unshift
   - indexOf, includes
   - slice, splice
   - forEach, map, filter, find
   - sort, reverse, join
   - spread operator
*/

let tests = ["login", "signup", "checkout", "payment"];

// Adding/Removing elements
console.log("Original:", tests);

tests.push("logout");              // Add to end
console.log("After push:", tests);

tests.pop();                       // Remove from end
console.log("After pop:", tests);

tests.unshift("registration");     // Add to beginning
console.log("After unshift:", tests);

tests.shift();                     // Remove from beginning
console.log("After shift:", tests);

// Searching
console.log("Index of checkout:", tests.indexOf("checkout"));
console.log("Includes payment:", tests.includes("payment"));

// Slice (non-mutating)
let subset = tests.slice(1, 3);
console.log("Slice 1-3:", subset);

// Iteration
console.log("\nForEach:");
tests.forEach((test, index) => {
    console.log(`${index + 1}. ${test}`);
});

// Map
let upperTests = tests.map(t => t.toUpperCase());
console.log("\nUpper case:", upperTests);

// Filter
let longTests = tests.filter(t => t.length > 6);
console.log("Long names (>6 chars):", longTests);

// Find
let found = tests.find(t => t.startsWith("pay"));
console.log("Starts with 'pay':", found);

// Join
let csv = tests.join(", ");
console.log("\nCSV format:", csv);

// Spread operator
let moreTests = [...tests, "profile", "settings"];
console.log("Spread:", moreTests);

// Sort
let sorted = [...tests].sort();
console.log("Sorted:", sorted);

// Reverse
let reversed = [...tests].reverse();
console.log("Reversed:", reversed);
