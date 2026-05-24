/*
  25_number_All_Literals.js
  -------------------------
  All types of Number literals in JavaScript with examples
  --------------------------------------------------------

  JavaScript supports several ways to write number literals:
    - Decimal (base-10) integers and floats
    - Binary (base-2)
    - Octal (base-8)
    - Hexadecimal (base-16)
    - Exponential / scientific notation
    - BigInt (arbitrary-precision integers)
    - Underscore separators (ES2021)
    - Special values: Infinity, NaN
*/

// ============================================================
// 1. DECIMAL INTEGERS (Base-10)
// ============================================================
let decimalInt = 42;
let zero = 0;
let negativeInt = -99;
console.log("Decimal Integer:", decimalInt);      // 42
console.log("Zero:", zero);                       // 0
console.log("Negative Integer:", negativeInt);      // -99


// ============================================================
// 2. DECIMAL FLOATING-POINT (Base-10 with decimal point)
// ============================================================
let float1 = 3.14;
let float2 = 0.5;
let float3 = 123.456;
let floatLeadingZero = .75;     // valid, but less readable
let floatTrailingZero = 5.;     // valid, evaluates to 5
console.log("Float 3.14:", float1);                 // 3.14
console.log("Float 0.5:", float2);                 // 0.5
console.log("Float .75:", floatLeadingZero);         // 0.75
console.log("Float 5.:", floatTrailingZero);        // 5


// ============================================================
// 3. BINARY LITERALS (Base-2) — prefix: 0b or 0B
// ============================================================
let binary1 = 0b1010;           // 10 in decimal
let binary2 = 0B1111;           // 15 in decimal
console.log("Binary 0b1010:", binary1);             // 10
console.log("Binary 0B1111:", binary2);             // 15


// ============================================================
// 4. OCTAL LITERALS (Base-8) — prefix: 0o or 0O
// ============================================================
let octal1 = 0o17;              // 15 in decimal
let octal2 = 0O77;              // 63 in decimal
console.log("Octal 0o17:", octal1);                // 15
console.log("Octal 0O77:", octal2);                // 63


// ============================================================
// 5. HEXADECIMAL LITERALS (Base-16) — prefix: 0x or 0X
// ============================================================
let hex1 = 0x1A;                // 26 in decimal
let hex2 = 0XFF;                // 255 in decimal
let hex3 = 0xdeadbeef;          // 3735928559 in decimal
console.log("Hex 0x1A:", hex1);                   // 26
console.log("Hex 0XFF:", hex2);                   // 255
console.log("Hex 0xdeadbeef:", hex3);               // 3735928559


// ============================================================
// 6. EXPONENTIAL / SCIENTIFIC NOTATION
// ============================================================
let exp1 = 1e3;                 // 1 × 10³ = 1000
let exp2 = 2.5e-2;              // 2.5 × 10⁻² = 0.025
let exp3 = 4E+5;                // 4 × 10⁵ = 400000
console.log("Exponential 1e3:", exp1);             // 1000
console.log("Exponential 2.5e-2:", exp2);          // 0.025
console.log("Exponential 4E+5:", exp3);            // 400000


// ============================================================
// 7. BIGINT LITERALS — suffix: n
// ============================================================
let bigInt1 = 9007199254740991n;        // safe integer limit + 1
let bigInt2 = 12345678901234567890n;
let bigInt3 = 0xFFn;                    // hex BigInt
let bigInt4 = 0b1010n;                  // binary BigInt
let bigInt5 = 0o77n;                    // octal BigInt
console.log("BigInt:", bigInt1);                   // 9007199254740991n
console.log("BigInt Hex:", bigInt3);                // 255n


// ============================================================
// 8. UNDERSCORE SEPARATORS (ES2021) — for readability
// ============================================================
let readableMillion = 1_000_000;
let readableBinary = 0b1010_1111;
let readableHex = 0xFF_FF;
let readableBigInt = 1_000_000_000_000n;
console.log("Readable Million:", readableMillion); // 1000000
console.log("Readable Binary:", readableBinary);    // 175
console.log("Readable Hex:", readableHex);         // 65535
console.log("Readable BigInt:", readableBigInt);    // 1000000000000n


// ============================================================
// 9. SPECIAL NUMBER VALUES
// ============================================================
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
console.log("Infinity:", positiveInfinity);        // Infinity
console.log("-Infinity:", negativeInfinity);      // -Infinity
console.log("NaN:", notANumber);                   // NaN


// ============================================================
// 10. typeof check
// ============================================================
console.log("typeof 42:", typeof 42);               // "number"
console.log("typeof 3.14:", typeof 3.14);           // "number"
console.log("typeof 0b1010:", typeof 0b1010);       // "number"
console.log("typeof 0xFF:", typeof 0xFF);           // "number"
console.log("typeof 1e3:", typeof 1e3);             // "number"
console.log("typeof 42n:", typeof 42n);             // "bigint"
console.log("typeof Infinity:", typeof Infinity);   // "number"
console.log("typeof NaN:", typeof NaN);             // "number" (special quirk)


// ============================================================
// Summary Table
// ============================================================
/*
  | Literal Type        | Example            | Description                       |
  |---------------------|--------------------|-----------------------------------|
  | Decimal Integer     | 42, -10            | Base-10 whole numbers             |
  | Decimal Float       | 3.14, .5, 5.       | Base-10 with decimal point        |
  | Binary              | 0b1010             | Base-2 (prefix 0b or 0B)          |
  | Octal               | 0o17               | Base-8 (prefix 0o or 0O)          |
  | Hexadecimal         | 0xFF, 0xdeadbeef   | Base-16 (prefix 0x or 0X)         |
  | Exponential         | 1e3, 2.5e-2        | Scientific notation               |
  | BigInt              | 9007199254740991n  | Arbitrary-precision integers      |
  | Underscore separator| 1_000_000          | Improves readability (ES2021)      |
  | Infinity            | Infinity, -Infinity| Represents infinite values        |
  | NaN                 | NaN                | Not-a-Number (invalid numeric op) |
*/
