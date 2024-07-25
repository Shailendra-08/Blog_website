const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const app = express()
const dotenv=require('dotenv')  // need to import
const authRouter=require('./routes/auth');
// const userRouter=require('./routes/user')
const userRouter=require('./routes/user');
const postRouter=require('./routes/post')
const commentRouter=require('./routes/comments')
const cookieParser = require('cookie-parser')

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
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth/",authRouter);
app.use("/api/user/",userRouter);
app.use("/api/post/",postRouter);
app.use("/api/comment/",commentRouter);



app.listen(5000,()=>{
    connectDB();    
    console.log("App is running on port 5000")
})