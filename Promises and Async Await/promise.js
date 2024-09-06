const { escape } = require("querystring");

const count = true;

let countValue = new Promise(function (resolve, reject)
{
    if (count)
    {
        resolve('It is resolved');
    }
    else
    {
        reject();
    }
    
})
console.log(countValue);