/*
  22_null_vs_Undefined.js
  ----------------------
  Difference between null and undefined in JavaScript
  ---------------------------------------------------

  1. undefined
     -----------
     - A variable that has been declared but not assigned a value is automatically
       set to `undefined` by JavaScript.
     - It represents an *unintentional* absence of value (something not yet set).
     - It is the default value of:
         • uninitialized variables
         • function parameters that were not passed
         • return values of functions with no explicit `return`
         • missing object properties

  2. null
     -----
     - `null` is an explicit assignment that means "no value" or "empty".
     - It represents an *intentional* absence of value (a value was intentionally
       removed or reset).
     - It is not automatically assigned by JavaScript; you must assign it yourself.

  3. Type difference (typeof)
     ------------------------
     - typeof undefined === "undefined"
     - typeof null === "object"   ← This is a well-known JavaScript quirk/bug.

  4. Equality check
     ---------------
     - null == undefined   → true   (loose equality)
     - null === undefined  → false  (strict equality)

  5. When to use what?
     -----------------
     - Use `undefined` to check whether something has been set yet.
     - Use `null` when you want to explicitly clear or reset a variable/object.
*/

// ==========================
// EXAMPLE 1: undefined
// ==========================

let name;                        // declared but not assigned
console.log(name);               // undefined
console.log(typeof name);        // "undefined"

function greet(user) {
  console.log(user);             // undefined (parameter not passed)
}
greet();

function multiply(a, b) {
  return a * b;                  // no explicit return for invalid inputs
}
console.log(multiply());         // NaN, but if no calculation: undefined

let person = { age: 25 };
console.log(person.name);        // undefined (property does not exist)

// ==========================
// EXAMPLE 2: null
// ==========================

let score = 100;
score = null;                    // intentionally cleared
console.log(score);              // null
console.log(typeof score);       // "object"  (JavaScript quirk)

let dbConnection = {
  host: "localhost",
  port: 3306
};
dbConnection = null;             // explicitly releasing the connection
console.log(dbConnection);       // null

// ==========================
// EXAMPLE 3: null vs undefined in comparison
// ==========================

console.log(null == undefined);   // true   (loose equality)
console.log(null === undefined);  // false  (strict equality, different types)

// ==========================
// EXAMPLE 4: Practical difference
// ==========================

function logValue(value) {
  if (value === undefined) {
    console.log("Value has not been set yet.");
  } else if (value === null) {
    console.log("Value has been intentionally cleared.");
  } else {
    console.log("Value is:", value);
  }
}

let a;
logValue(a);                     // "Value has not been set yet."

let b = null;
logValue(b);                     // "Value has been intentionally cleared."

let c = 42;
logValue(c);                     // "Value is: 42"

// ==========================
// Summary Table
// ==========================
/*
  | Feature              | undefined                         | null                       |
  |----------------------|-----------------------------------|----------------------------|
  | Meaning              | Not assigned / missing            | Intentionally empty        |
  | Set by JS?           | Yes (automatically)               | No (must assign manually)  |
  | typeof               | "undefined"                       | "object"                   |
  | Loose equality (==)  | true with null                    | true with undefined        |
  | Strict equality (===)| false with null                   | false with undefined       |
*/
