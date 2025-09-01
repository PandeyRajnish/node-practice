const fs = require('fs');

const a = 100;

setImmediate(() => console.log('setImmediate'));

fs.readFile('./test.txt', 'utf8', () => {
    console.log('file reading CB');
});

setTimeout(() => console.log('Timer Expired'));

function printA () {
    console.log('a=', a)
}

printA();

console.log("Last line of the file.")

//! output
//* 100
//* Last line of the file.
//* Timer Expired
//* setImmediate
//* file reading CB