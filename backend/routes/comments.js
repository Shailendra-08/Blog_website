const express = require('express');
const router=express.Router();
const User = require('../models/User');
const Post = require('../models/Post');
const Comments = require('../models/Comments');
const verifyToken = require('../verifyToken');

const bcrypt = require('bcrypt')


//Create

router.post("/create",verifyToken,async(req,res)=>{
    try{
        const newComment = new Comments(req.body);
        const savedComment= await newComment.save();
        res.status(200).json(savedComment)

    }catch(err){
        res.status(500).json(err);
    }
})



//Update
router.put("/:id",verifyToken,async(req,res)=>{
    try{
        const UpdateComment = await Comments.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(UpdateComment)

    }catch(err){
        res.status(500).json(err);
    }
})



//Delete

router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await Comments.findByIdAndDelete(req.params.id)
      
        res.status(200).json("Comment has been Deleted!")


    }catch(err){
        res.status(500).json(err);
    }
})




//Get Posts Comments

router.get("/post/:postId",async(req,res)=>{
    try{
       const comment = await Comments.find({postId:req.params.postId});
       console.log(req.params.userId);
        res.status(200).json(comment);

    }catch(err){
        res.status(500).json(err);
    }
})





module.exports=router;
