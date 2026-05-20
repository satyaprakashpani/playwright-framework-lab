let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // ReferenceError (NOT "global"!)
    let x = "if block";     // TDZ ends
    console.log(x);      // "block"
}

console.log(x);

{
    //console.log(x); //ReferenceError: Cannot access 'x' before initialization
    let x = "simple block"
    console.log(x);
}