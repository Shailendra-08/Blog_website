const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const dotenv=require('dotenv')  // need to import
const authRouter=require('./routes/auth');
// const userRouter=require('./routes/user')
const userRouter=require('./routes/user');

// connection to database

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected Successfully")

    }catch(err){
        console.log(err);

    }

}



// Middleware Learning and using in the Project
dotenv.config() // need to config here to work with env
app.use(express.json())
app.use("/api/auth/",authRouter)
app.use("/api/user/",userRouter);


app.listen(5000,()=>{
    connectDB();    
    console.log("App is running on port 5000")
})