function normalizeJsBasicsLabel(label) {
    const normalized = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return normalized ? `js-basic-${normalized}` : "js-basic";
}


console.log(normalizeJsBasicsLabel("     "));