const express = require('express');

const app = express();

const PORT = 3002;
app.use(express.json());
let count = 0;
function countRequest(req, res, next)
{
    count++;
    next();
}

app.get('/expose', countRequest, (req, res) => {
    res.json({
        no_request:count
    })
})

app.listen(PORT, () => {
    console.log(`App is Running on the PORT Number ${PORT}`);
})