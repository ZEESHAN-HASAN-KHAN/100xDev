const {MONGO_URI}=require('./config')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
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
    password: String,
    balance: {
        type: Number,
        require:true
    },
    role:String
})

const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email: {type:String,unique:true},
    password: String,
    role:String
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    keyFeatures: [String],
    creatorId: {
        type: ObjectId,
        ref:"admin"
    }
})

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref:"user"
    },
    courseId: {
        type: ObjectId,
        ref:"course"
    }
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