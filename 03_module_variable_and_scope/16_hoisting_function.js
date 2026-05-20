function getUserStatus() { // JS Engine
    //var status_code; JS Engine (optimized the code)
    console.log("Before Delcaration inside function : " + status_code);
    var status_code = "Active";
    console.log("After Delcaration inside function : " + status_code);
}

getUserStatus();

console.log("Before Global Delcaration : " + status_code);
var status_code = "InActive";
console.log("After Global Delcaration : " + status_code);






// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.