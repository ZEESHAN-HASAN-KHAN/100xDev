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
        firstName: zod.string(),
        lastName: zod.string(),
        email: zod.string().email(),
        password: zod.string()
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
            password: hashpassword
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
        password:zod.string()
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

    const isPassword = bcrypt.compare(password, admin.password);

    if (!isPassword)
    {
        return res.json({
            message:"Invalid Credentials"
        })
    }

    const adminId = admin._id;
    const token = jwt.sign({ adminId }, JWT_ADMIN_PASSWORD);
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
    console.log('Decoded value is' + JSON.stringify(decoded));

    return res.status(200).json({
        message: "Authenticated Successfully",
        token:token
    })

})
//This EndPoint let's admin create a course
adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.adminId;

    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
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
            message:"Course Updated",
            courses
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