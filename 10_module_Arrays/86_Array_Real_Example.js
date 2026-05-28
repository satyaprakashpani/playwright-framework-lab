let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log("No. of Browsers: " + browser.length);
console.log("Browser Array: " + browser);

browser.pop();
console.log("pop() removed from end:-> " + browser);

let removed = browser.shift();
console.log("Browser array after browser.shift() - removed --->" + browser);
console.log("removed browser: " + removed);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}