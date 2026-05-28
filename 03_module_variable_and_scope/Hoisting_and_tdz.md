# Hoisting & Temporal Dead Zone (TDZ) in JavaScript

## What is Hoisting?

**Hoisting** is JavaScript's behavior of moving **declarations** to the top of their scope during the compile phase, before the code is executed.

> **Important:** Only the **declaration** is hoisted, **not the initialization/assignment**.

---

## 1. `var` Hoisting

`var` declarations are hoisted to the top of their scope and automatically initialized with `undefined`.

```javascript
console.log(name);     // undefined  (not an error!)
var name = "Alice";
console.log(name);     // "Alice"
```

**What JavaScript actually does:**
```javascript
// Internally hoisted:
var name;              // declaration moved to top, initialized as undefined
console.log(name);     // undefined
name = "Alice";        // assignment stays in place
console.log(name);     // "Alice"
```

### Another Example
```javascript
function example() {
  console.log(count);  // undefined
  var count = 10;
  console.log(count);  // 10
}
example();
```

---

## 2. `let` and `const` Hoisting + TDZ

`let` and `const` are **also hoisted**, but they are **NOT initialized**. They enter the **Temporal Dead Zone (TDZ)**.

### What is TDZ?

The **Temporal Dead Zone** is the period between the start of a scope and where the variable is actually declared. During this time, accessing the variable throws a `ReferenceError`.

```javascript
console.log(age);      // ReferenceError: Cannot access 'age' before initialization
let age = 25;
```

```javascript
console.log(PI);       // ReferenceError
const PI = 3.14;
```

### TDZ Visualized
```javascript
// Scope starts here
// ---> TDZ begins for 'score'
//      (score exists but cannot be accessed)

console.log(score);    // ReferenceError! TDZ violation

// ---> TDZ ends here
let score = 100;       // declaration + initialization
console.log(score);    // 100
```

---

## 3. Function Hoisting

**Function declarations** are hoisted **completely** (name + body), so you can call them before they appear in code.

```javascript
sayHello();            // Works! Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

**Function expressions are NOT hoisted as functions:**

```javascript
sayHi();               // TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};
```

**Why?** Because only `var sayHi` is hoisted (as `undefined`), not the function assignment.

---

## 4. TDZ Examples in Detail

### Example 1: TDZ with `let`
```javascript
let x = 10;

function test() {
  console.log(x);      // ReferenceError! 
  // x in outer scope is shadowed by local let x
  // Local x is hoisted but in TDZ
  
  let x = 20;          // TDZ ends here
}

test();
```

> Even though `x = 10` exists outside, the inner `let x` is hoisted and creates its own TDZ inside the function.

---

### Example 2: TDZ with `typeof`
```javascript
// With var (no TDZ):
console.log(typeof undeclaredVar);  // "undefined" (just returns undefined)

// With let:
console.log(typeof tdzVar);         // ReferenceError! Cannot access before initialization
let tdzVar = 5;
```

> `typeof` normally returns `"undefined"` for undeclared variables, but in TDZ it throws an error.

---

### Example 3: TDZ in Loops
```javascript
for (let i = 0; i < 3; i++) {
  // Each iteration has its own TDZ for `i`
  console.log(i);      // Works fine here
}
```

---

### Example 4: TDZ with Function Parameters
```javascript
function foo(a = b, b) {
  // Default parameter 'a = b' tries to access 'b' before it's declared
  console.log(a, b);
}

foo(undefined, 2);     // ReferenceError: Cannot access 'b' before initialization
```

> Parameters are evaluated left-to-right. `b` is hoisted but in TDZ when `a`'s default value is evaluated.

---

## 5. Comparison Table

| Feature | `var` | `let` | `const` | `function` |
|---------|-------|-------|---------|------------|
| **Hoisted?** | Yes | Yes | Yes | Yes |
| **Initialized?** | Yes (`undefined`) | No (TDZ) | No (TDZ) | Yes (fully) |
| **Scope** | Function/Global | Block | Block | Function/Global |
| **Access before declaration?** | Yes (`undefined`) | No (ReferenceError) | No (ReferenceError) | Yes (works fully) |
| **Can redeclare?** | Yes | No | No | Yes |

---

## 6. Practical Best Practices

### Use `let` / `const` to avoid hoisting bugs
```javascript
// Bad: var hoisting causes confusion
function calculate() {
  console.log(result);  // undefined (silent bug)
  var result = 10;
}

// Good: let throws clear error if misordered
function calculate() {
  console.log(result);  // ReferenceError (catches the bug early!)
  let result = 10;
}
```

### Declare variables at the top of scope
```javascript
function processData() {
  // Declare everything first
  let data;
  let result;
  let isValid;
  
  // Then use them
  data = fetchData();
  isValid = validate(data);
  result = transform(data);
  
  return result;
}
```

### Use function declarations for shared utilities (safe hoisting)
```javascript
// This is fine - function declarations are fully hoisted
const output = formatCurrency(100);

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}
```

---

## Summary

| Concept | Explanation |
|---------|-------------|
| **Hoisting** | JavaScript moves declarations to the top of scope before execution |
| **TDZ** | The zone between scope start and variable declaration where `let`/`const` exist but cannot be accessed |
| **Key Rule** | `var` -> hoisted + initialized as `undefined`. `let`/`const` -> hoisted but NOT initialized (TDZ). Function declarations -> hoisted fully. |

> **Remember:** Hoisting with `var` often causes silent bugs with `undefined`. Using `let`/`const` makes JavaScript throw a clear error if you try to use a variable too early, helping you catch mistakes during development.
