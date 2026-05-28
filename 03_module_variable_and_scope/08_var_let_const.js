var v = 10;
let l = 50;
const c = 20;

var browserName = 'chromium';
var browserName = 'firefox';//Redeclaration allowed
browserName = 'edge'; //Reassignment is allowed

//for, functions

var testcases = ['login', 'Logout', 'Dashboard',];
for (var i = 0; i < testcases.length; i++) {
    console.log("Running test :" + testcases[i]);
}

console.log("Loop counter leaked outside:", i);



