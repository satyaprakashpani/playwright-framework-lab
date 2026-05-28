# JavaScript Identifier Rules

An **identifier** in JavaScript is a name used to identify variables, functions, classes, modules, or other entities in code. JavaScript identifiers must follow specific rules and conventions.

---

## 1. Basic Naming Rules

| Rule | Description | Example |
|------|-------------|---------|
| **Must start with** a letter, underscore (`_`), or dollar sign (`$`) | Numbers cannot be the first character | `name`, `_private`, `$element` |
| **Can contain** letters, digits (0-9), underscores, or dollar signs | After the first character, numbers are allowed | `name1`, `_count2`, `$button3` |
| **Cannot be a reserved keyword** | Keywords have special meaning in JavaScript | `var`, `function`, `class` |
| **Case-sensitive** | Uppercase and lowercase are different | `Name` and `name` are different identifiers |

### Examples

```javascript
// Valid identifiers
let name = "John";
let _private = true;
let $element = document.getElementById('btn');
let userName = "johndoe";      // camelCase (recommended for variables/functions)
let UserName = "johndoe";      // PascalCase (different from userName)
let name1 = "Alice";
let _count2 = 100;
let $button3 = null;

// Invalid identifiers (will throw SyntaxError)
// let 1name = "John";         // Cannot start with a number
// let my-name = "John";       // Hyphens are not allowed
// let my name = "John";       // Spaces are not allowed
// let var = 10;               // Cannot use reserved keyword
```

---

## 2. Reserved Keywords (Cannot Be Used as Identifiers)

These words are reserved by JavaScript and cannot be used as identifiers:

### Current Keywords
| Category | Keywords |
|----------|----------|
| Declarations | `var`, `let`, `const`, `function`, `class` |
| Control Flow | `if`, `else`, `switch`, `case`, `default`, `break`, `continue`, `return`, `yield`, `await` |
| Loops | `for`, `while`, `do`, `in`, `of` |
| Error Handling | `try`, `catch`, `finally`, `throw` |
| Boolean/Null | `true`, `false`, `null` |
| Other | `new`, `this`, `typeof`, `instanceof`, `delete`, `void`, `with`, `debugger`, `import`, `export`, `extends`, `super`, `static`, `get`, `set`, `async` |

### Future Reserved Words
| Category | Words |
|----------|-------|
| Strict mode | `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield` |
| Always reserved | `enum` |

### Examples

```javascript
// INVALID - using reserved keywords
// let class = "Math";           // SyntaxError
// const if = 10;                // SyntaxError
// var function = () => {};      // SyntaxError
// let await = 5;                // SyntaxError (inside async functions)
// let enum = "value";           // SyntaxError

// VALID - similar but not reserved
let className = "Math";          // OK - "className" is not reserved
let myIf = true;                 // OK - "myIf" is not reserved
let myFunction = () => {};       // OK - "myFunction" is not reserved
```

---

## 3. Naming Conventions

### camelCase
- **Use for:** variables, functions, methods
- **Rule:** first word lowercase, subsequent words capitalized

```javascript
let firstName = "John";
let lastName = "Doe";
let totalItemCount = 42;

function getUserName() {
    return "johndoe";
}

function calculateTotalPrice(price, quantity) {
    return price * quantity;
}
```

### PascalCase (UpperCamelCase)
- **Use for:** classes, constructors, React components, enums
- **Rule:** every word starts with a capital letter

```javascript
class UserAccount {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class ShoppingCart {
    addItem(item) {
        // logic
    }
}

// React Component example
function WelcomeMessage() {
    return "Welcome!";
}

const HttpStatusCode = {
    OK: 200,
    NotFound: 404,
    ServerError: 500
};
```

### snake_case
- **Use for:** database fields, constants (sometimes), file names
- **Rule:** lowercase with underscores

```javascript
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";

let user_profile = {
    first_name: "John",
    last_name: "Doe"
};

// In database columns
// user_id, created_at, updated_at
```

### SCREAMING_SNAKE_CASE (UPPER_CASE)
- **Use for:** constants, configuration values
- **Rule:** uppercase with underscores

```javascript
const PI = 3.14159;
const MAX_USERS = 100;
const DEFAULT_TIMEOUT = 5000;
const API_KEY = "abc123xyz";
const ENVIRONMENT = "production";
```

### Private Members (Leading Underscore)
- **Use for:** indicating private/internal properties (convention only, not enforced)

```javascript
class BankAccount {
    constructor() {
        this._balance = 0;          // convention: "private" property
        this._accountNumber = null;  // internal use only
    }
    
    _validateAmount(amount) {        // convention: "private" method
        return amount > 0;
    }
}
```

### jQuery / DOM Elements (Leading Dollar Sign)
- **Use for:** variables holding jQuery objects or DOM elements

```javascript
let $button = $("#submit-btn");
let $form = $("#login-form");
let $container = document.getElementById('container');
let $header = $('.header');

$button.on('click', function() {
    $form.submit();
});
```

---

## 4. Special Identifier Patterns

### Hungarian Notation (Legacy / Not Recommended)
- Prefix indicates the data type

```javascript
// Not recommended in modern JavaScript
let strName = "John";     // str = string
let intAge = 30;          // int = integer
let bIsActive = true;     // b = boolean
let arrUsers = [];        // arr = array
let objUser = {};         // obj = object
```

### Boolean Prefixes (Common Practice)
- Prefix with `is`, `has`, `can`, `should`, `will` for booleans

```javascript
let isActive = true;
let hasPermission = false;
let canEdit = true;
let shouldRetry = false;
let isValidEmail = validateEmail(email);
let hasChildren = user.children.length > 0;
```

### Function Verb Prefixes
- Start function names with action verbs

```javascript
function getData() { }
function setName() { }
function calculateTotal() { }
function validateInput() { }
function createUser() { }
function deleteItem() { }
function updateProfile() { }
function fetchUsers() { }
function renderPage() { }
function handleClick() { }
function parseJSON() { }
```

---

## 5. Unicode Identifiers

JavaScript supports Unicode characters in identifiers (ES6+).

```javascript
// Valid Unicode identifiers
let \u0041 = "A";            // \u0041 is 'A'
let \u{1F600} = "smile";     // Unicode escape
let \u{1F680} = "rocket";    // Emoji as identifier (valid but NOT recommended)

// Some Unicode characters are valid but avoid in practice
let \u03C0 = 3.14;           // \u03C0 is 'π'

// NOT recommended for production code - keep identifiers ASCII
// let имя = "John";          // Valid but confusing for most teams
// let 名前 = "John";         // Valid but confusing for most teams
```

---

## 6. Special Characters Allowed

| Character | Usage | Example |
|-----------|-------|---------|
| `_` (underscore) | Prefix for private/internal | `_privateVar` |
| `$` (dollar sign) | jQuery/DOM variables, template literals | `$button`, `$element` |
| Unicode letters | International characters (avoid) | `имя`, `名前` |

### Examples

```javascript
// Valid but specific use cases
let _count = 0;
let _ = require('lodash');
let $ = require('jquery');
let _lodash = require('lodash');

// The underscore by itself is a valid identifier
let _ = 42;

// Dollar sign at start or within
let $ = jQuery;
let $container = document.querySelector('.container');
let my$var = 10;

// Unicode
let \u03C0 = 3.14;           // π
let \u00E9 = "e acute";      // é
```

---

## 7. Identifier Examples Summary Table

| Identifier | Valid? | Explanation |
|------------|--------|-------------|
| `name` | Yes | Simple letters |
| `_name` | Yes | Starts with underscore |
| `$name` | Yes | Starts with dollar sign |
| `name1` | Yes | Letters followed by digit |
| `_1name` | Yes | Starts with underscore, contains digit |
| `$1name` | Yes | Starts with dollar sign, contains digit |
| `1name` | **No** | Starts with digit |
| `my-name` | **No** | Hyphens not allowed |
| `my name` | **No** | Spaces not allowed |
| `my.name` | **No** | Dots not allowed |
| `my@name` | **No** | Special characters not allowed |
| `var` | **No** | Reserved keyword |
| `class` | **No** | Reserved keyword |
| `function` | **No** | Reserved keyword |
| `Class` | Yes | Case-sensitive, "Class" is different from "class" |
| `myVar` | Yes | camelCase convention |
| `MyVar` | Yes | PascalCase convention |
| `MY_VAR` | Yes | SCREAMING_SNAKE_CASE convention |
| `my_var` | Yes | snake_case convention |

---

## 8. Best Practices

```javascript
// Use descriptive names
let firstName = "John";              // Good
let fn = "John";                     // Avoid - too short
let x = "John";                      // Avoid - meaningless in this context
let theNameOfTheFirstUser = "John";  // Avoid - too long

// Be consistent with naming conventions
// camelCase for variables and functions
let userProfile = {};
function getUserData() { }

// PascalCase for classes
class UserProfile { }

// SCREAMING_SNAKE_CASE for constants
const MAX_FILE_SIZE = 10485760;

// Boolean variables - use prefixes
let isLoggedIn = true;
let hasError = false;
let canAccess = false;

// Avoid single letter names (except loops)
for (let i = 0; i < 10; i++) { }     // i, j, k are OK in loops
let a = 10;                          // Avoid - not descriptive

// Use plural for arrays
let users = [];
let productList = [];
let activeOrders = [];

// Use singular for single objects
let user = {};
let currentProduct = {};

// Avoid abbreviations (unless well-known)
let customer = {};                   // Good
let cust = {};                       // Avoid - unclear
let doc = document;                  // OK - common abbreviation
let btn = button;                    // OK - common abbreviation
```

---

> **Key Takeaway:** Always use meaningful, descriptive names that follow consistent conventions. This makes your code readable and maintainable.
