const fs = require("fs");

// Sync...
// fs.writeFileSync("./test.txt", "Hello world");

// Async
fs.writeFile("./test.txt", "Hello world Async", (error) => {});
