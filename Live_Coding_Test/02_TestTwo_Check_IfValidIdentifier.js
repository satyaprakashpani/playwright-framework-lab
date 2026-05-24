function isValidJsBasicsIdentifier(value) {
    const reservedWords = ["let", "const", "var", "class", "function", "return"];

    // Must be a string
    if (typeof value !== "string") {
        return false;
    }

    // Must be non‑empty after trim
    const trimmed = value.trim();
    if (trimmed === "") {
        return false;
    }

    // Must start with letter, _ or $; rest can be letters, digits, _ or $
    const isJsIdentifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(trimmed);

    if (!isJsIdentifier) {
        return false;
    }

    // Must not be a reserved word
    if (reservedWords.includes(trimmed)) {
        return false;
    }

    return true;

}

console.log(isValidJsBasicsIdentifier("    _TestFound$          "))