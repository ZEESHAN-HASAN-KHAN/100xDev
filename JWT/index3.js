const express = require('express');
const app = express();
const jwt_secret = 'secret';
const jwt = require('jsonwebtoken');

app.use(express.json());

let users = [];


app.get("/", function (req, res) {
    res.sendFile(__dirname+"/public/index.html")
})
app.post("/signup", function (req, res)
{
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"You are signed in"
    })
})


app.post("/signin", function (req, res)
{
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;
    users.find((u) => {
        if (u.username == username)
        {
            foundUser = u;
        }
    })
    
    if (!foundUser)
    {
        res.json({
            message:"Your credential are not correct"
        })

    }
    else {
        console.log('coming inside');
        const token = jwt.sign({username: username }, jwt_secret);
        res.json({
            token:token
        })
    }
    
})


function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, jwt_secret);

    if (decodedData.username) {
        req.username = decodedData.username;
        next()
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}


app.get("/me",  auth, function(req, res) {
    
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === req.username) {
            foundUser = users[i]
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
})
app.listen(3002)

