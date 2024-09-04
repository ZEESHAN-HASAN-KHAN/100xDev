const express = require('express');
const app = express();
const PORT = 3000;

function middleware(req, res, next) {
    console.log('Method is ' + req.method);
    console.log('URL is ' + req.url);
    console.log(new Date());
    next();
}

app.get('/sum', middleware, function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});

app.listen(PORT, () => {
    console.log(`App is Running on ${PORT}`);
});
