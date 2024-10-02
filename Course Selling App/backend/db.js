
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const {MONGO_URI}=require('./config')
async function dbconnect()
{
    try {
    
        await mongoose.connect(MONGO_URI)
        console.log('Db is connected')
    }
    catch (e)
    {
        console.log('Testing' + e);
        process.exit(1);
    }
}
dbconnect();
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email: {type:String,unique:true},
    password:String
})

const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email: {type:String,unique:true},
    password:String 
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId:ObjectId
})

const purchaseSchema = new mongoose.Schema({
    userId: ObjectId,
    courseId:ObjectId    
});

const userModel = mongoose.model('users', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
    dbconnect
};