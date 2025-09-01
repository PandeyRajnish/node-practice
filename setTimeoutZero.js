
console.log("Hello World")

var a = 1090707;
var b = 79740;

//* setTimeout Zero - This callback will only be pushed in the call stack in v8 once the call stack is empty because of this setTimeout has trust isses

//* Only call stack is empty then 0 seconds 
setTimeout(() => {
    console.log("Call me right now")
}, 0) //* It will only be called once call stackof main theread is empty

setTimeout(() => {
    console.log("Call me after 3 seconds")
}, 3000)

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b)

console.log(`Multiplication is : ${c}`)