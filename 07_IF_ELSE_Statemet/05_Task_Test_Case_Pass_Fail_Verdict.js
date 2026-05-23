/* Problem: Compare actual result with expected result and print test verdict.
Sample Input/Output:
expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed
expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials */

let expected = "Login Successful"
let actual = "Invalid Credential"

if (expected === actual) {
    console.log("Actual is matching with Expected : ✅ Test Passed")
} else {
    console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials")
}