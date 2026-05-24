/* Build a compact summary object from test result labels.

Rules:
- Count total items.
- Count items containing pass, fail, and skip.
- Return an object with total, passed, failed, skipped. */



function summarizeJsBasicsResults(results) {
    let total = results.length;
    let passed = 0;
    let failed = 0;
    let skipped = 0;

    for (let i = 0; i < total; i++) {
        const label = results[i].toLowerCase();
        if (label.includes("pass")) {
            passed++;
        } else if (label.includes("fail")) {
            failed++;
        } else if (label.includes("skip")) {
            skipped++;
        }
    }

    return { total, passed, failed, skipped };
}
console.log(summarizeJsBasicsResults([]))