// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log("statuses[0] :" + statuses[0]);
console.log("statuses[1] :" + statuses[2]);

console.log("statuses.at(-1): " + statuses.at(-1));
console.log("statuses.at(-2): " + statuses.at(-2));
console.log("statuses.at(-3): " + statuses.at(-3));
//console.log("statuses.at(-4): " + statuses.at(-4)); //undefined

// Modify
statuses[1] = "blocked";
console.log("Modified Statuses Array: " + statuses);
statuses[2] = "Modified Status";
console.log("Modified Statuses Array: " + statuses);