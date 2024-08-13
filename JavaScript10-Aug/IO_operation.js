const fs = require("fs");


const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);


const contents1 = fs.readFileSync("b.txt", "utf-8");
console.log(contents1);