let countValue = new Promise(function (resolve, reject)
{
    resolve('Promise Resolved');
})

countValue.then(function successValue(result)
{
    console.log(result);
})
//.then method is called when promise is resolved successfully.