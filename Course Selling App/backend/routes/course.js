const express = require('express');
const { courseModel, purchaseModel, userModel } = require('../db');
const { userMiddleware } = require("../middleware/user");
const { adminMiddleware } = require('../middleware/admin');
// const { use } = require('bcrypt/promises');



const courseRouter = express.Router();
courseRouter.post('/purchases', userMiddleware, async (req, res) => {
    console.log('ITS COMING INSIDE');
    const userId = req.userId;
    const courseId = req.body.courseId;

    //should check that the user has actually paid the price
    const ifPurchased = await purchaseModel.findOne({
        userId,courseId
    })
    if (ifPurchased)
    {
        return res.status(400).json({
            error: "You have already purchased the course"
        })
    }

    const user = await userModel.findById(userId);
    const course = await courseModel.findById(courseId);
    console.log(`User Balance ${user.balance}`);
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
    res.status(200).json({
        message:"You have successfully bought the course"
    })
})
//This Endpoint doesn't even need to be authenticated
//This EndPoint will give every Course
courseRouter.get('/all/preview', async (req, res) => {
    console.log('Hitting from home')
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})
// This EndPoint will give me details of particular Course
courseRouter.get('/:id',async (req, res) => {
    const courseId = req.params.id;
    const course = await courseModel.findById({ _id: courseId });
    res.json({
        course:course
    })
})
module.exports = courseRouter;