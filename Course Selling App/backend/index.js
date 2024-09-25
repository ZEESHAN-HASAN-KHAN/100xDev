require('dotenv').config()
const express = require('express');
const userRouter =require('./routes/user');
const adminRouter=require('./routes/admin')

const courseRouter = require('./routes/course');

const app = express();

//Adding Middleware
app.use(express.json());
app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(3000, () => {
    console.log('App is running on the port');

})