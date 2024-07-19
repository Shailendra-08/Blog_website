const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const dotenv=require('dotenv')  // need to import
// connection to database

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected Successfully")

    }catch(err){
        console.log(err);

    }

}

dotenv.config() // need to config here to work with env


// Middleware Learning and using in the Project











app.listen(5000,()=>{
    connectDB();    
    console.log("App is running on port 5000")
})