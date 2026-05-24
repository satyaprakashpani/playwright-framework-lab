# 04_module_Literals — File Documentation

This folder contains JavaScript files that explore and demonstrate the concept of **Literals** in JavaScript. A literal is a notation for representing a fixed value in source code.

---

## 21_Literal_Concepts.js

**Topic:** Introduction to JavaScript Literals and `typeof` operator.

**Description:**
Demonstrates the basic literal types available in JavaScript — string, boolean, numeric, null, and undefined. Uses the `typeof` operator to inspect and print the data type of each literal.

**Key Concepts:**
- `typeof` operator usage
- String, number, boolean, null, and undefined literals
- Difference between `null` type (`object`) and its literal representation

---

## 22_null_vs_Undefined.js

**Topic:** Difference between `null` and `undefined`.

**Description:**
Comprehensive explanation and practical examples showing the distinction between `null` (intentional absence of value) and `undefined` (unintentional absence of value). Covers typeof quirks, equality checks, and real-world usage scenarios.

**Key Concepts:**
- `undefined`: auto-assigned by JS (uninitialized vars, missing params, missing props)
- `null`: manually assigned to indicate empty/cleared state
- `typeof null === "object"` — known JS quirk
- Loose (`==`) vs Strict (`===`) equality comparison
- When to use which in practice

---

## 23_null.js

**Topic:** Basic `typeof` checks for null and undefined.

**Description:**
A short and focused script that demonstrates `typeof` behavior with `null`, `undefined`, `0`, and empty strings. Useful for understanding the gotcha where `typeof null` returns `"object"`.

**Key Concepts:**
- Quick `typeof` reference
- `typeof null` returns `"object"`
- `typeof undefined` returns `"undefined"`
- Empty string `typeof` is `"string"`, `0` is `"number"`

---

## 24_number_Literals.js

**Topic:** Introduction to Number Literals.

**Description:**
Introduces various number literal formats in JavaScript including decimal, hexadecimal, octal, and exponential notation. Demonstrates the `typeof` behavior for each format.

**Key Concepts:**
- Decimal integers: `42`, `-100`, `0`
- Hexadecimal: `0xFF`
- Octal: `0o77`
- Exponential: `1e6`, `1.5e-4`
- All evaluate to the `"number"` type

---

## 25_number_All_Literals.js

**Topic:** Comprehensive guide to all Number Literal types in JS.

**Description:**
An exhaustive reference covering every number literal format available in JavaScript. Includes examples for decimal, float, binary, octal, hexadecimal, exponential, BigInt, underscore separators, and special values like `Infinity` and `NaN`.

**Key Concepts:**
- Decimal integers and floating-point numbers
- Binary (`0b`), Octal (`0o`), Hexadecimal (`0x`) literals
- Scientific / Exponential notation (`1e3`, `2.5e-2`)
- BigInt (`42n`) — arbitrary precision integers
- Underscore separators for readability (`1_000_000`) — ES2021
- Special values: `Infinity`, `-Infinity`, `NaN`
- `typeof` check for each type

---

## 26_String_Literals.js

**Topic:** String Literals using Single and Double Quotes.

**Description:**
Demonstrates how to create string literals using single quotes (`'...'`) and double quotes (`"..."`). Shows how to mix quote types inside strings without escaping.

**Key Concepts:**
- Single-quoted strings with double quotes inside
- Double-quoted strings with single quotes inside
- Both evaluate to `"string"` type
- JavaScript allows either style — consistency is key

---

## 27_Template_Literals.js

**Topic:** Template Literals (Backtick Strings) with Interpolation.

**Description:**
Shows the power of template literals (backticks `` `...` ``) introduced in ES6. Covers variable interpolation, building dynamic URLs, Playwright locators, log formatting, screenshot paths, and JSON payloads.

**Key Concepts:**
- Interpolation with `${variable}`
- Dynamic string construction (API URLs, file paths)
- Embedding expressions inside strings
- Practical Playwright and QA automation use cases

---

## 28_Single_Double_Backtick_Quotes.js

**Topic:** Single Quote vs Double Quote vs Backtick — Full Comparison.

**Description:**
A complete reference comparing all three ways to define strings in JavaScript. Covers syntax, interpolation, multi-line support, escaping rules, expression embedding, and practical recommendations.

**Key Concepts:**
- **Single Quotes** (`'...'`): Simple static strings, use when string contains double quotes
- **Double Quotes** (`"..."`): Simple static strings, use when string contains single quotes
- **Backticks** (`` `...` ``): ES6 template literals — support interpolation, multi-line, and expression embedding
- Comparison table of features
- Practical use cases for each style

---

## Summary Table

| File | Topic | Key Takeaway |
|------|-------|--------------|
| 21_Literal_Concepts.js | typeof & literals | Learn how JS identifies literal types |
| 22_null_vs_Undefined.js | null vs undefined | Understand intentional vs unintentional absence of value |
| 23_null.js | Basic typeof checks | Quick reference for null/undefined typeof behavior |
| 24_number_Literals.js | Number formats | Decimal, hex, octal, exponential basics |
| 25_number_All_Literals.js | Complete number guide | Every number literal format with examples |
| 26_String_Literals.js | Single & double quotes | Quote style basics and escaping |
| 27_Template_Literals.js | Backtick strings | Interpolation and dynamic string building |
| 28_Single_Double_Backtick_Quotes.js | All quote types compared | When to use which quote style |
