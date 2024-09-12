const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtPassword = "123456";

const app = express();

mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.jzk7w.mongodb.net/exa",
);

const UserSchema = new mongoose.Schema({
  username: String,
  password:String
})

const User = mongoose.model('User', UserSchema);
app.use(express.json());

async function userExists(username, password) {
    // should check in the database
    var user = await User.findOne({ username: username });
   
    return user;
}
app.post("/signup", async function (req, res)
{
  const username = req.body.username;
  const password = req.body.password;
  if (userExists(username,password)!=null)
  {
    return res.json({
      message:"Username Already Exists"
    })
  }
  try
  {
    console.log("It is coming")
    await User.create({
      username: username,
      password:password
    })
    return res.status(200).json({
      message:"User Created Succesfully"
    })
  }
  catch (e)
  {
    res.status(500).json({
      message:"Unable to create the data in database"
    })
  }
  
})
app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (userExists(username, password) == null) {
    console.log('User Donot Exist in Datatbase');
    return res.status(403).json({
      msg: "User doesnt exist in our MongoDb db",
    });
    }
    // User Exist

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser)
    {
        var token = jwt.sign({ username: username }, jwtPassword);
        return res.json({
          token:token,
        });
    }
    else {
        return res.status(403).json({
                  msg: "User doesnt exist in our in memory db",
                });
    }
 
  
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username= decoded.username;
    // return a list of users other than this username from the database

    let u=await User.find()
      return res.json({ users:u});
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token or Unable to access Database",
    });
  }
});

app.listen(3000, () => {
    console.log(`App is Running on PORT 3000`);
});
