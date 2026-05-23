/* Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical(block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input / Output:
Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium */

let bug_impact_score = 9;

if (bug_impact_score >= 9 && bug_impact_score < 11) {
    console.log("Severity: Critical - Bloack release");
} else if (bug_impact_score >= 7 && bug_impact_score < 9) {
    console.log("Severity: High");
} else if (bug_impact_score >= 4 && bug_impact_score < 7) {
    console.log("Severity: Medium");
} else if (bug_impact_score >= 1 && bug_impact_score < 4) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}