const fs = require("fs")
const https = require("https")

console.log('Hello World')

var a = 1090707;
var b = 297998;

// Synchronous
fs.readFileSync("./test.txt", 'utf-8')
console.log("This will only execute after the file read")

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully!!")
})

setTimeout(() => {
    console.log("Set Timeout")
}, 5000);

// Async function
fs.readFile('./test.txt', 'utf-8', (err, data) => {
    console.log("File Data ", data)
})


function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b)

console.log(`Multiplication is : ${c}`)