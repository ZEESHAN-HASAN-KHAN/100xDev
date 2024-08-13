// function logName()
// {
//     console.log("Harkirat");
// }
// setTimeout(logName, 3000);

function helper(resolve)
{
    setTimeout(resolve, 5000);
}
function SetTimeOutPromise()
{
    return new Promise(helper);
}

let p = SetTimeOutPromise();
console.log(p);
p.then(() => console.log("Promise is resolver now"));