function cb(resolve)
{
    setTimeout(resolve, 1000);
    
}
function r()
{
    console.log("Done");
}
let p = new Promise(cb);
p.then(r);