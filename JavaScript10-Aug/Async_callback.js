const fs = require("fs");

function print(err, data)
{
    console.log("Error is " + err);
    console.log("Data is " + data);
}
fs.readFile("a.txt", "utf-8", print);
fs.readFile("b.txt", "utf-8", print);

console.log('Done');