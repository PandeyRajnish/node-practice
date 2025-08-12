const crypto = require("crypto")

console.log("Hello World")

var a = 1090707;
var b = 79740;

// pbkdf2 - Password Base Key Derivative Function

//* Synchronous Function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First key is generated")

// Async function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
    console.log("Second key is generated")
})

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b)

console.log(`Multiplication is : ${c}`)