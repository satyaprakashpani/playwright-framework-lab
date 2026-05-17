/* block-scoped
cannot be reassigned
available only inside the block where it is declared */

const baseURL = "https://google.com";

console.log(baseURL);

//const baseURL = "https://testNation.in";//SyntaxError: Identifier 'baseURL' has already been declared

{
    console.log("Inside block");
    console.log(baseURL);//ReferenceError: Cannot access 'baseURL' before initialization
    //const baseURL = "https://constblockscope.com"
}

{
    console.log("Inside 2nd block");
    const baseURL = "https://constblockscope.com"
    console.log(baseURL);
}


console.log(baseURL);