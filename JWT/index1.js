const express = require('express');
const jwt= require('jsonwebtoken');
const app = express();
const PORT = 3001;

//In Memory Variable
const users = [];

//MiddleWare to parse the body 
app.use(express.json());

function generateToken()
{
    return Math.random();
}

app.post("/signup", function (req, res)
{
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    })
    res.status(200).json({
        message:'You are signed in'
    })
    console.log(users)
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function (u)
    {
        if (u.username == username)
        {
            return true;
        }
        else {
            return false;
        }
    })
    if (user)
    {
        const token = jwt.sign({ username: username }, 'secret');
        
        // const token = generateToken();
        user.token = token;
        console.log(user);
        res.json({
            message:user.token
        })
    }
    else {
        return res.status(403).send({
            message:'Invalid Username'
        })
    }
})


app.get("/me", (req, res) => {
    const token = req.headers.token;
    if (token)
    {
        jwt.verify(token, 'secret', (err, decode) => {
            if (err)
            {
               return  res.status(401).send({
                    message:'Unauthorized'
                })
            }
            else
            {
                req.user = decode;
            }
        })
    }
    else
    {
        return res.status(401).send({
           message:"Unauthorised"
       })
    }
    res.send({ username: req.user });
    
    // let foundUser = null;
    // users.find((u) => {
    //     if (u.token == token)
    //     {
    //         foundUser = u;
    //     }
    // })
    // if (foundUser)
    // {
    //     res.json({
    //         username: foundUser.username,
    //         password:foundUser.password
    //     })
    // }
    // else
    // {
    //     res.status(500).json({
    //         mesasge:'Danger'
    //     })
    //     }
})


app.listen(PORT, () => {
    console.log(`App is Running on the port ${PORT}`);
})