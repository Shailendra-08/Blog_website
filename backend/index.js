const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const app = express()
const dotenv=require('dotenv')  // need to import
const authRouter=require('./routes/auth');
// const userRouter=require('./routes/user')
const userRouter=require('./routes/user');
const path=require("path")
const postRouter=require('./routes/post')
const commentRouter=require('./routes/comments')
const cookieParser = require('cookie-parser')
const multer=require('multer')

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
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth/",authRouter);
app.use("/api/user/",userRouter);
app.use("/api/post/",postRouter);
app.use("/api/comment/",commentRouter);

// image upload using multer

const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.jpg")   -- for api testing hardcoded the value
    },
})


const upload =multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image uplaoded successfully!")
})



app.listen(5000,()=>{
    connectDB();    
    console.log("App is running on port 5000")
})