const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User')



//Register

router.post('/register' ,async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const salt =await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hashSync(password,salt);
        const newUser = new User({username,email,password:hashedPassword});

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    }catch(err){
        res.status(500).json(err);
    }

})




//Login


router.post('/login' ,async(req,res)=>{
    try{
        const user =await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json("User not found!!");
        }
        const match= await bcrypt.compare(req.body.password,user.password);
        if(!match){
            return res.status(401).json("Wrong Credentials");
        }
        // JWT code start here
        const token = jwt.sign({id:user._id},process.env.SECRET,{expiresIn:"3d"});
        const {password,...info}=user._doc;
        res.cookie("token",token).status(200).json(info)
        res.status(200).json(user);
        
  

    }catch(err){
        res.status(500).json(err);
    }

})

//Logout
router.get("/logout",async(req,res)=>{
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User Logged out Successfully")

    }catch(err){
        res.status(500).json(err);
    }
})


module.exports=router;

