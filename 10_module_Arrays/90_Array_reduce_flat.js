let scores = [45, 82, 91, 60, 73, 20];


// reduce , // reduce — accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log("total score: " + total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log("Flattened all nested Array :" + nested.flat());