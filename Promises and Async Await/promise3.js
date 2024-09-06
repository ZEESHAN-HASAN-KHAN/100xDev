const myPromise = new Promise(function (resolve, reject)
{
    setTimeout(() => {
        const data = 'Promise resolved successfully';
        resolve(data);
    }, 3000);
})

myPromise.then(function (result)
{
    console.log("Promise Fullfilled", result);
})