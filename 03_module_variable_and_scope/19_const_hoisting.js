//console.log(c);//ReferenceError: Cannot access 'c' before initialization - TDZ starts
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");

const c = "pramod;" //TDZ ends
console.log(c);