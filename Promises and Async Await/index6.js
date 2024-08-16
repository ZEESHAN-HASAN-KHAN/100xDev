let myPromise = new Promise(function (res, rej) {
    let x = 1;
    if (x == 0)
    {
        res("Ok");
    }
    else {
        rej("Error");
    }
})

myPromise.then((val) => { console.log(val) }, (error) => {
    console.log(error)
});