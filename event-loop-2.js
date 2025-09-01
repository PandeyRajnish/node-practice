const fs = require('fs');

const a = 10;

setImmediate(() => console.log('setImmediate'));

Promise.resolve('Promise').then(console.log);

fs.readFile('./test.txt', 'utf-8', () => {
  console.log('File Reading CB');
});

setTimeout(() => console.log('Timer Expired'));

process.nextTick(() => console.log('process.nextTick()'));

function printA() {
  console.log('a=', a);
}

printA();
console.log('Last line of the file.');

//! Output
//* a= 10
//* Last line of the file.
//* process.nextTick
//* Promise
//* Timer Expired
//* setImmediate
//* File Reading CB
