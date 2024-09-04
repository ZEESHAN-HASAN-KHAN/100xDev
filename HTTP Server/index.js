const express = require('express');

const app = express();

const PORT = 3001;

app.get("/sum", function (req, res) {

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a+b
    })
    
});

app.get("/multiply", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a*b
    })
});

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a/b
    })
});

app.get("/subtract", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a-b
    })
});

app.listen(PORT, () => {
    console.log(`App is Running on PORT ${PORT}`);
});