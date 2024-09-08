const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtPassword = "123456";

const app = express();

mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.jzk7w.mongodb.net/exa",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});


const user = new User({ name: 'Zeeshan Hasan Khan',username:'Zeeshan54khan' , password: '12345' });
user.save();
app.use(express.json());

// async function userExists(username, password) {
//     // should check in the database
//     console.log('Going Inside');
//     const user = await User.findOne({ username: username });
//     console.log(user);
//     return user;
// }

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

//   if (userExists(username, password)==null) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//     }
    // User Exist

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser)
    {
        var token = jwt.sign({ username: username }, "esta");
        return res.json({
          token,
        });
    }
    else {
        return res.status(403).json({
                  msg: "User doesnt exist in our in memory db",
                });
    }
 
  
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, "esta");
    const username = decoded.username;
      // return a list of users other than this username from the database
      return res.json({ name: username });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
    console.log(`App is Running on PORT` + 3000);
});
