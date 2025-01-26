const express = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const userRouter = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userMiddleware } = require("../middleware/user");
const { JWT_USER_PASSWORD } = require("../config");
userRouter.post("/signup", async (req, res) => {
  const signupBody = zod.object({
    email: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string(),
  });
  const { success } = signupBody.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: "Invalid Inputs/Format is wrong",
    });
  }

  const existingUser = await userModel.findOne({
    email: req.body.email,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "User already exists",
    });
  }
  try {
    const hashpassword = await bcrypt.hash(req.body.password, 5);
    const user = await userModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashpassword,
      balance: 10000,
      role: "user",
    });
    const userId = user._id;
    console.log(`user id ${userId}`);
    const token = jwt.sign({ userId }, JWT_USER_PASSWORD);
    console.log(`token is ${token}`);
    return res.json({
      message: "User Created Succesfully",
      token: token,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Unable to create your account",
    });
  }
});
//Sign IN
userRouter.post("/signin", async (req, res) => {
  const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string(),
  });

  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Invalide Input data",
    });
  }

  const user = await userModel.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }
  const compare = await bcrypt.compare(req.body.password, user.password);

  if (!compare) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }
  const userId = user._id;
  const token = jwt.sign({ userId }, JWT_USER_PASSWORD);
  // console.log(token);
  //Decoded the token
  //It has no use here but just for testing
  const decoded = jwt.verify(token, JWT_USER_PASSWORD);
  console.log("Decoded Value is " + JSON.stringify(decoded));
  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    // secure: process.env.NODE_ENV === 'production', // Ensures cookies are only sent over HTTPS in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
  });
  const userData = await userModel.findById(userId);
  res.status(200).json({
    message: "User Signed Succesfully",
    data: userData,
  });
});
userRouter.get("/logout", async (req, res) => {
  console.log("Logout is coming here");
  res.clearCookie("token", {
    httpOnly: true,
    path: "/", // Use the path you originally set for the cookie
  });
  res.status(200).json({ message: "Logout successful" });
});

// This End Point give you all the course that user Purcharsed
userRouter.get("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const purchases = await purchaseModel.find({
    userId,
  });

  let purchasesCourseIds = [];

  for (let i = 0; i < purchases.length; i++) {
    purchasesCourseIds.push(purchases[i].courseId);
  }

  const courseData = await courseModel.find({
    _id: { $in: purchasesCourseIds },
  });
  res.json({
    purchases,
    courseData,
  });
});

module.exports = userRouter;
