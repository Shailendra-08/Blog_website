const express = require('express');
const router=express.Router();
const User = require('../models/User');
const Post = require('../models/Post');
const Comments = require('../models/Comments');
const verifyToken = require('../verifyToken');
const bcrypt = require('bcrypt')



//Update
router.put("/:id",verifyToken,async(req,res)=>{
    try{
        if(req.body.password){
            const salt=await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hashSync(req.body.password,salt)
        }
        const UpdateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(UpdateUser)

    }catch(err){
        res.status(500).json(err);
    }
})



//Delete

router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        await Post.deleteMany({userId:req.params.id})
        await Comments.deleteMany({userId:req.params.id})
        res.status(200).json("User has been Deleted!")


    }catch(err){
        res.status(500).json(err);
    }
})




//Get User

router.get("/:id",async(req,res)=>{
    try{
       const user = await User.findById(req.params.id);
       const {password,...info} = user._doc
        
        res.status(200).json(info);


    }catch(err){
        res.status(500).json(err);
    }
})




module.exports=router;
