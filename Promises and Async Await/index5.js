let myPromise = new Promise(function (resolve, reject) {
    // resolve();
    // reject();
    setTimeout(reject, 5000);
})

myPromise.then(function (value) { console.log('Success'); },
    function (error) {
        console.log('Failure')
    
})