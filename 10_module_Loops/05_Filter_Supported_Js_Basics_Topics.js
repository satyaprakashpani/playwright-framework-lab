/* Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

Rules:
- Trim and lowercase each item.
- Allow known aliases from the chapter group.
- Return canonical topic keys in first-seen order.
- Skip unsupported values.
 */


function filterSupportedJsBasicsTopics(topics) {
    const supported = {
        node: "node",
        runtime: "node",
        v8: "v8",
        engine: "v8",
        npm: "npm",
        "package-manager": "npm"
    };

    let result = [];
    const seen = new Set();

    for (const item of topics) {
        const normalized = item.trim().toLowerCase();
        const canonical = supported[normalized];

        if (canonical !== undefined && !seen.has(canonical)) {
            result.push(canonical);
            seen.add(canonical);
        }
    }

    return result;
}

console.log(filterSupportedJsBasicsTopics(["node", "engine", "node"]));