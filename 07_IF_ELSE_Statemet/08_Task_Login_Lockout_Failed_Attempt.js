/* Problem: Track failed login attempts.Lock the account after 3 failed attempts.
Input: attempts = 2
Output: 1 attempt left before lockout
Input: attempts = 3
Output: 🔒 Account Locked — Contact support
Input: attempts = 0
Output: Login successful */

let login_attempt = 2;

if (login_attempt === 0) console.log("Login successful");
else if (login_attempt === 1) console.log("2 attempt left before lockout");
else if (login_attempt === 2) console.log("1 attempt left before lockout");
else if (login_attempt === 3) console.log("🔒 Account Locked — Contact support");
else console.log("Invalid attempt count");