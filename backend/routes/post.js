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
        const newPost = new Post(req.body);
        const savedPost= await newPost.save();
        res.status(200).json(savedPost)

    }catch(err){
        res.status(500).json(err);
    }
})



//Update
router.put("/:id",verifyToken,async(req,res)=>{
    try{
        const UpdateUser = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(UpdateUser)

    }catch(err){
        res.status(500).json(err);
    }
})



//Delete

router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
      
        res.status(200).json("Post has been Deleted!")


    }catch(err){
        res.status(500).json(err);
    }
})




//Get Post details

router.get("/:id",async(req,res)=>{
    try{
       const post = await Post.findById(req.params.id);
      
        res.status(200).json(post);


    }catch(err){
        res.status(500).json(err);
    }
})


//Get Posts

router.get("/",async(req,res)=>{
    const query = req.query
    console.log(query)
    try{
       const searchFilter ={
        title:{$regex:query.search , $options:"i"}
       }


       const post = await Post.find(query.search?searchFilter:null);
      
        res.status(200).json(post);


    }catch(err){
        res.status(500).json(err);
    }
})



//Get Users Posts

router.get("/user/:userId",async(req,res)=>{
    try{
       const posts = await Post.find({userID:req.params.userId});
       console.log(req.params.userId);
        res.status(200).json(posts);

    }catch(err){
        res.status(500).json(err);
    }
})



// Search Router

router.get("/search/:prompt",async(req,res)=>{
    try{


    }catch(err){
        res.status(500).json(err);
    }

})





















module.exports=router;
