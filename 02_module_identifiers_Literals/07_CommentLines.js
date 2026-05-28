/**
 * JavaScript Comment Types
 * ========================
 *
 * Comments are used to explain code, make it more readable,
 * and to prevent execution when testing alternative code.
 * They are ignored by the JavaScript engine.
 */

// ============================================================================
// Keyboard Shortcuts for Comments (VS Code on Windows)
// ============================================================================
//
//  Toggle Line Comment          :  Ctrl + /
//  Toggle Block Comment         :  Shift + Alt + A
//  Toggle JSDoc Comment         :  Shift + Alt + A  (or type /** above a function)
//  Add Line Comment             :  Ctrl + K  Ctrl + C
//  Remove Line Comment          :  Ctrl + K  Ctrl + U
//  Format Document              :  Shift + Alt + F  (cleans up comments too)
//
//  Tips:
//  - Select multiple lines and press Ctrl + / to comment/uncomment them all.
//  - Use Shift + Alt + A to wrap a selection in /* */ block comments.
//  - Typing /** above a function and pressing Enter auto-generates JSDoc.

// ============================================================================
// 1. Single-Line Comments (//)
// ============================================================================
// Everything after // on the same line is ignored.

// This is a single-line comment
let price = 100; // This comment explains the variable

// Declare variables for demonstration
let isLoggedIn = true;

// Check if user is logged in
if (isLoggedIn) {
    // Placeholder for dashboard logic
}

// Temporarily disable a line of code
// console.log("This will not run");

// Multiple single-line comments for a short description
// Calculate the total price including tax
// Tax rate is currently 8%
let total = price * 1.08;

// ============================================================================
// 2. Multi-Line Comments (/* ... */)
// ============================================================================
/* This is a
   multi-line comment.
   It can span many lines. */

/*
 * Function: calculateDiscount
 * Purpose:  Calculate the final price after applying a discount.
 * Parameters:
 *   - price: original price
 *   - discountPercent: percentage off (e.g., 20 for 20%)
 * Returns: discounted price
 */
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

/*
    You can also use multi-line comments
    to temporarily block out a chunk of code
    during debugging.

    let oldCode = "deprecated";
    oldCode.run();
*/

// ============================================================================
// 3. Documentation Comments (JSDoc style - /** ... */)
// ============================================================================
/**
 * Represents a user in the system.
 * @class
 */
class User {
    /**
     * Create a new user.
     * @param {string} name - The full name of the user.
     * @param {string} email - The email address.
     * @param {number} [age] - Optional age of the user.
     */
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    /**
     * Send a greeting message.
     * @returns {string} A personalized greeting.
     */
    greet() {
        return `Hello, ${this.name}!`;
    }
}

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 * @example
 * // returns 5
 * add(2, 3);
 */
function add(a, b) {
    return a + b;
}

// ============================================================================
// 4. TODO / FIXME / HACK / NOTE / XXX Comments
// ============================================================================
// These are informal tags developers use to mark special comments.

// TODO: Implement input validation for email format
function signUp(email) {
    // TODO: Add password strength check
    return true;
}

// FIXME: This API call fails when the server is under heavy load
async function fetchData() {
    // Simulated fetch for demonstration
    return { json: () => ({ data: [] }) };
}

// HACK: Workaround for IE11 bug, remove when dropping support
let userAgent = "Mozilla/5.0";
if (userAgent.indexOf("Trident") > -1) {
    // apply polyfill
}

// NOTE: The timeout is set to 5000ms based on performance tests
const TIMEOUT = 5000;

// XXX: Refactor this block before next release — too complex
function processOrder(order) {
    // complex logic...
    return order;
}

// ============================================================================
// 5. Inline Comments (comments placed at the end of a line)
// ============================================================================

let count = 0;          // Loop counter
const MAX = 100;        // Maximum allowed items
let isReady = false;    // Flag to track initialization status

// Ternary example with declared variables
let a = 10;
let b = 20;
let result = a > b ? a : b; // Ternary: choose the larger value

for (let i = 0; i < 10; i++) { // Iterate 10 times
    // Loop iteration
}

// ============================================================================
// 6. File/Module Header Comments
// ============================================================================
/**
 * @fileoverview Utility functions for date formatting and manipulation.
 * @author John Doe <john.doe@example.com>
 * @version 1.2.0
 * @license MIT
 */

// ============================================================================
// 7. Region Comments (supported by some editors, e.g., VS Code)
// ============================================================================

// #region Authentication Helpers
function login() {
    // Authentication logic
}
function logout() {
    // Cleanup logic
}
function refreshToken() {
    // Token refresh logic
}
// #endregion

// #region Data Fetching
function getUsers() {
    // Fetch users logic
}
function getOrders() {
    // Fetch orders logic
}
// #endregion

// ============================================================================
// Summary
// ============================================================================
// | Comment Type           | Syntax                | VS Code Shortcut    | Best Used For                          |
// |------------------------|-----------------------|---------------------|----------------------------------------|
// | Single-line            | // comment            | Ctrl + /            | Quick notes, short explanations        |
// | Multi-line             | /* ... * /            | Shift + Alt + A     | Longer explanations, blocking code     |
// | Documentation (JSDoc)  | /** ... * /           | Type /** + Enter    | Functions, classes, API documentation  |
// | Task tags              | TODO, FIXME, etc.     | (manual)            | Marking work to be done later          |
// | Inline                 | code; // comment      | Ctrl + /            | Short clarifications on the same line  |
// | File headers           | /** @fileoverview * / | (manual / snippet)  | Module-level documentation             |
// | Region                 | //#region             | (manual)            | Code folding/grouping in editors       |