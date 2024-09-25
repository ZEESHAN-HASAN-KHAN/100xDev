const express = require('express');
const { courseModel, purchaseModel } = require('../db');
const { userMiddleware } = require("../middleware/user");



const courseRouter = express.Router();
courseRouter.post('/purchases',userMiddleware,async(req, res)=> {
    const userId = req.userId;
    const courseId = req.body.courseId;

    //should check that the user has actually paid the price
    await purchaseModel.create({
        userId,
        courseId
    });
    res.json({
        message:"You have successfully bought the course"
    })
})
courseRouter.get('/preview',async(req, res)=> {
    const course = await courseModel.find({});
    res.json({
        course
    })
})
module.exports = courseRouter;