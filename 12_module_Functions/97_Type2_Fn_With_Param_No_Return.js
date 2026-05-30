//one parameter and no return statement
function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Satya");//Hi  Satya
let result = greetByName("Amit");//Hi  Amit
console.log("result: " + result);//undefined


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);//Thanks 100
console.log("returnMesomething : " + returnMesomething);//undefined