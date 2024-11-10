const express = require('express');
const adminRouter = express.Router();
const { adminModel,courseModel} = require('../db')
const zod = require('zod');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { adminMiddleware } = require('../middleware/admin');
const { JWT_ADMIN_PASSWORD } =require('../config')
// console.log('It is here')
adminRouter.post('/signup', async function (req, res) {
 
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
  
    const signupBody = zod.object({
        firstName: zod.string().max(50),
        lastName: zod.string().max(50),
        email: zod.string().email(),
        password: zod.string().min(3).max(10)
    })

    const { success } = signupBody.safeParse(req.body);
    if (!success)
    {
        return res.status(411).json({
            message:"Invalid Input"
        })
    }

    const existingAdmin = await adminModel.findOne({
        email:email
    })
    if (existingAdmin)
    {
        return res.json({
            message:"Admin Already Exist"
        }
        )
    }
    
    try {
        const hashpassword = await bcrypt.hash(password, 5);
        const admin = await adminModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashpassword,
            role:"admin"
        });
        const adminId = admin._id;
        const token = jwt.sign({ adminId }, JWT_ADMIN_PASSWORD);
        return res.status(200).json({
            message: "Admin is Created Successfully",
            token:token
        })
    }
    catch (e)
    {
        console.log(`error is ${e}`);
        return res.status(500).json({
            message:"Unable to create Admin in our Database"
        })
    }
  
})
adminRouter.post('/signin', async function(req, res)  {
    const email = req.body.email;
    const password = req.body.password;

    const signinBody = zod.object({
        email: zod.string().email(),
        password:zod.string().min(3).max(50)
    })

    const { success } = signinBody.safeParse(req.body);

    if (!success)
    {
        return res.status(401).json({
            message:"Invaid Inputs"
        })
    }

    const admin = await adminModel.findOne({
        email:email
    })
    if (!admin)
    {
        return res.json({
            message: "Admin Doesn't Exist"

        })
    }

    const isPassword = await bcrypt.compare(password, admin.password);

    if (!isPassword)
    {
        return res.json({
            message:"Invalid Credentials"
        })
    }

    const adminId = admin._id;
    const token = jwt.sign({ adminId }, JWT_ADMIN_PASSWORD);

    //sending the cookies
    res.cookie('token', token, {
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        // secure: process.env.NODE_ENV === 'production', // Ensures cookies are only sent over HTTPS in production
        maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    });
    const adminData = await adminModel.findById(adminId);
    return res.status(200).json({
        message: "Authenticated Successfully",
        data:adminData
    })

})
//This EndPoint let's admin create a course
adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.adminId;

    const { title, description, imageUrl, price,keyFeatures } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price,
        keyFeatures:keyFeatures,
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})
//This Endpoint let's Admin to update the course
adminRouter.put('/course', adminMiddleware,async function (req, res)
{

    const { title, description, imageUrl, price, courseId } = req.body;
    const adminId=req.adminId;
    try {
       
       const course=await courseModel.findOneAndUpdate({
           _id: courseId,
           creatorId:adminId
        }, {
           title: title,
           description: description,
           imageUrl: imageUrl,
            price:price
       })
        console.log(course._id);
        return res.status(200).json({
            message: "Course Updated",
            courseId: course._id
          
        })
    }
    catch (e)
    {
        console.log(e);
        return res.send({
            message:"error"
        })
    }
})
//This EndPoint let's Admin to see all the courses that they have created
adminRouter.get('/course/bulk', adminMiddleware,async function (req, res)
{
    const adminId = req.adminId;

    try {
        const courses = await courseModel.find({
            creatorId:adminId
        })

        return res.status(200).json({
            message:"All Courses",
            courseData:courses
        })
    } catch (e)
    {
        console.log('Error is ' + e);
        res.status(402).json({
            message:"Unable to find the courses"
        })
    }
})


module.exports=adminRouter