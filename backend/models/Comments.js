const mongoose = require('mongoose')

const CommentsSchema=new mongoose.Schema({
    comment:{
        type:String,
        require:true,
        
    },
    author:{
        type:String,
        require:true,
       
    },
    postId:{
        type:String,
        require:true,
    },
    userID:{
        type:String,
        require:true,
    }

},{timestamps:true})

module.exports=mongoose.model("Comments",CommentsSchema);