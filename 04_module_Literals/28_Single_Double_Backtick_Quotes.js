/*
  28_Single_Double_Backtick_Quotes.js
  -----------------------------------
  Single Quote vs Double Quote vs Backtick (Template Literal) in JavaScript
  ---------------------------------------------------------------------------

  JavaScript provides three ways to define string literals:
    1. Single quotes ('...')
    2. Double quotes ("...")
    3. Backticks / Template literals (`...`)

  1. SINGLE QUOTES ('...')
     ----------------------
     - Used to create a string literal.
     - Inside single-quoted strings, you can freely use double quotes
       without escaping.
     - To include a single quote inside, you must escape it with a
       backslash: \'
     - Does NOT support string interpolation (embedding variables directly).
     - Does NOT support multi-line strings.

  2. DOUBLE QUOTES ("...")
     ----------------------
     - Also used to create a string literal.
     - Inside double-quoted strings, you can freely use single quotes
       without escaping.
     - To include a double quote inside, you must escape it with a
       backslash: \"
     - Does NOT support string interpolation.
     - Does NOT support multi-line strings.

  3. BACKTICKS / TEMPLATE LITERALS (`...`)
     ---------------------------------------
     - Introduced in ES6 (ECMAScript 2015).
     - Supports string interpolation using ${variable} syntax.
     - Supports multi-line strings without escaping newlines.
     - Allows expression evaluation inside ${...}.
     - To include a backtick inside, escape it with a backslash: \`
     - Can use tagged templates for advanced string processing.

  KEY DIFFERENCES
  ---------------
  | Feature              | 'Single' | "Double" | `Backtick` |
  |----------------------|----------|----------|------------|
  | String value         | Yes      | Yes      | Yes        |
  | Interpolation        | No       | No       | Yes        |
  | Multi-line           | No       | No       | Yes        |
  | Expression embedding | No       | No       | Yes        |
  | Escape inner quote   | \'       | \"       | \`         |
  | Tagged templates     | No       | No       | Yes        |

  RECOMMENDATION
  --------------
  - Use single or double quotes for simple, static strings.
  - Pick one style and be consistent across your codebase.
  - Use backticks when you need interpolation, multi-line strings,
    or expression embedding.
*/

// ============================================================
// 1. SINGLE QUOTES EXAMPLES
// ============================================================

let singleName = 'Alice';
let singleSentence = 'He said, "Hello!"';  // double quotes inside freely
let singleApostrophe = 'It\'s a sunny day';   // must escape single quote

console.log("Single quote string:", singleName);
console.log("Single with double quotes inside:", singleSentence);
console.log("Single with escaped apostrophe:", singleApostrophe);

// Single quotes do NOT support interpolation
let language = 'JavaScript';
// console.log('I love ${language}');  // prints: I love ${language}  (no interpolation)


// ============================================================
// 2. DOUBLE QUOTES EXAMPLES
// ============================================================

let doubleName = "Bob";
let doubleSentence = "She said, 'Good morning!'"; // single quotes inside freely
let doubleQuoteInside = "He replied, \"Thank you!\""; // must escape double quote

console.log("Double quote string:", doubleName);
console.log("Double with single quotes inside:", doubleSentence);
console.log("Double with escaped double quote:", doubleQuoteInside);

// Double quotes do NOT support interpolation
// console.log("I love ${language}");  // prints: I love ${language}


// ============================================================
// 3. BACKTICK / TEMPLATE LITERAL EXAMPLES
// ============================================================

let backtickName = `Charlie`;
let backtickSentence = `He said, "Hello!" and 'Goodbye!'`; // both quotes freely
let backtickInterpolation = `I love ${language}`;            // interpolation!

console.log("Backtick string:", backtickName);
console.log("Backtick with both quotes:", backtickSentence);
console.log("Backtick with interpolation:", backtickInterpolation);

// Multi-line string with backticks
let multiLine = `
  Line 1: Setup environment
  Line 2: Install dependencies
  Line 3: Run tests
`;
console.log("Multi-line string:\n", multiLine);

// Expression evaluation inside backticks
let a = 10;
let b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`);  // Sum of 10 and 20 is 30

// Escaping backticks inside backticks
let escapedBacktick = `Use \`code\` for inline code`;
console.log("Escaped backtick:", escapedBacktick);


// ============================================================
// 4. COMPARISON: Trying the same thing with all three
// ============================================================

let user = "Satya";
let score = 95;

// Single quote - manual concatenation only
let singleMsg = 'Hello, ' + user + '! Your score is ' + score + '.';
console.log("Single quote msg:", singleMsg);

// Double quote - manual concatenation only
let doubleMsg = "Hello, " + user + "! Your score is " + score + ".";
console.log("Double quote msg:", doubleMsg);

// Backtick - clean interpolation
let backtickMsg = `Hello, ${user}! Your score is ${score}.`;
console.log("Backtick msg:", backtickMsg);


// ============================================================
// 5. DIFFERENCE — Single vs Double vs Backtick
// ============================================================

/*
  SINGLE QUOTES ('...')
  ---------------------
  • Best for: Simple strings with double quotes inside.
  • Cannot interpolate variables or expressions.
  • Cannot span multiple lines directly.
  • Escaping: Must use \' for inner single quotes.
  • No special features beyond basic string storage.

  DOUBLE QUOTES ("...")
  ---------------------
  • Best for: Simple strings with single quotes inside.
  • Cannot interpolate variables or expressions.
  • Cannot span multiple lines directly.
  • Escaping: Must use \" for inner double quotes.
  • Functionally identical to single quotes — choose one style per project.

  BACKTICKS / TEMPLATE LITERALS (`...`)
  --------------------------------------
  • Best for: Dynamic strings, multi-line text, expression embedding.
  • Interpolation: Use ${variable} to embed variables directly.
  • Multi-line: Write across multiple lines without \n or concatenation.
  • Expression embedding: Can perform calculations, function calls, ternary ops.
  • Escaping: Must use \` for inner backticks.
  • Tagged templates: Enable custom parsing with functions.
  • ES6 feature — not available in older environments without transpilation.

  PRACTICAL SUMMARY
  -----------------
  - Use 'single' or "double" for static, one-line text.
  - Use `backtick` for anything that needs variables, expressions,
    or multiple lines.
*/

// ============================================================
// 6. PRACTICAL USE CASES
// ============================================================

// Use single quotes when string contains double quotes
let htmlAttr = 'class="container" id="main"';
console.log("HTML attribute string:", htmlAttr);

// Use double quotes when string contains single quotes
let possessive = "The dog's toy is red.";
console.log("Possessive string:", possessive);

// Use backticks for dynamic content, multi-line, or expressions
let report = `
  Test Report
  ------------
  User: ${user}
  Score: ${score}
  Status: ${score >= 90 ? 'Excellent' : 'Good'}
`;
console.log("Report:\n", report);


// ============================================================
// Summary
// ============================================================
/*
  - Single quotes ('') and double quotes ("") are functionally identical
    in JavaScript. Choose one and stay consistent.
  - Backticks (``) are special — they unlock interpolation, multi-line
    strings, and expression embedding.
  - For simple static text: use 'single' or "double" quotes.
  - For dynamic or multi-line text: always use `backticks`.
*/
