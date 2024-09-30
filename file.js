const { error } = require("console");
const fs = require("fs");

// Sync...
// fs.writeFileSync("./test.txt", "Hello world");

// Async
// fs.writeFile("./test.txt", "Hello world Async", (error) => {});

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log("Error", error);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", `${Date.now()} Hey there!\n`);

// copy the file
// fs.cpSync("./test.txt", "copy.txt");

// delete the file
// fs.unlinkSync("./copy.txt");

// Show the status of the file
console.log(fs.statSync("./test.txt"));
