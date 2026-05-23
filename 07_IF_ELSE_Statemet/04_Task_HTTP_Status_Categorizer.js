/* Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid
Sample Input/Output:
Input: 404
Output: Client Error
Input: 200
Output: Success */

let statusCode = 404;

if (statusCode >= 200 & statusCode <= 299) console.log("Success");
else if (statusCode >= 300 && statusCode <= 399) console.log("Redirection");
else if (statusCode >= 400 && statusCode <= 499) console.log("Client Error");
else if (statusCode >= 500 && statusCode <= 599) console.log("Server Error");
else
    console.log("Invalid");
