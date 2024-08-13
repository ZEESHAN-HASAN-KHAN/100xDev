const fs = require("fs");
function promisified()
{
    return new Promise((resolve) => { resolve() });
}

fs.readFile("a.txt", "utf-8").then(cb);

