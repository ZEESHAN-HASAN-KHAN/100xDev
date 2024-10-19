const express = require('express');
const { courseModel, purchaseModel, userModel } = require('../db');
const { userMiddleware } = require("../middleware/user");
const { adminMiddleware } = require('../middleware/admin');
const { use } = require('bcrypt/promises');



const courseRouter = express.Router();
courseRouter.post('/purchases',userMiddleware,async(req, res)=> {
    const userId = req.userId;
    const courseId = req.body.courseId;

    //should check that the user has actually paid the price
    const ifPurchased = await purchaseModel.findOne({
        userId,courseId
    })
    if (ifPurchased)
    {
        return res.status(403).json({
            error: "You have already purchased the course"
        })
    }

    const user = await userModel.findById(userId);
    const course = await courseModel.findById(courseId);

    if (user.balance < course.price)
    {
        return res.status(403).json({
            error:"Insufficent Balance"
        })
    }
    user.balance -= course.price;
    user.save();

    await purchaseModel.create({
        userId,
        courseId
    });
    res.json({
        message:"You have successfully bought the course"
    })
})
//This Endpoint doesn't even need to be authenticated
courseRouter.get('/all/preview',userMiddleware, async (req, res) => {
    console.log('Hitting from home')
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})
module.exports = courseRouter;