/* Count how many check result strings represent a pass.

Rules:
- Treat matching as case-insensitive.
- A passing item contains the word "pass".
- Return only the count.
 */

function countPassingJsBasicsChecks(results) {
    let count = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i].toLowerCase().includes("pass")) {
            count++;
        }
    }
    return count;
}

console.log(countPassingJsBasicsChecks(["one-PASS", "two-skip"]))