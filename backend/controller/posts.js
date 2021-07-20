import mongoose from "mongoose";
import PostMessage from "../model/postMessage.js";

export const getPosts=async (req, res)=>{
    try{
        const postMessage=await PostMessage.find();
        res.status(200).json(postMessage);
    }catch(err){
    
        console.error(err.message);
        res.status(404).json({message: err.message});
    }
}

export const createPost=async (req, res)=>{
    if(!req.userId){
        return res.status(400).json({message: 'Unauthenticated'});
    }
    const { title, message, selectedFile, creator, tags } = req.body;
    const allTags = tags.replace(/ /g,"").split(",");
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags:allTags })

      try{
        await newPostMessage.save();
        res.status(201).json(newPostMessage);

    }catch(err){
        console.error(err.message);
        res.status(409).json({message: err.message});
    }
}

export const updatePost=async(req, res)=>{
    if(!req.userId){
        return res.status(400).json({message: 'Unauthenticated'});
    }
    const {id:_id}=req.params;
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json(`No Post with that id ${_id}`);
    }
    
    try{
        const updatedPost=await PostMessage.findByIdAndUpdate(_id, post, {new: true});
        return res.status(200).json(updatedPost);
    }catch(err){
        console.error(err.message);
    }
}

export const deletePost=async(req, res)=>{
    if(!req.userId){
        return res.status(400).json({message: 'Unauthenticated'});
    }
    const {id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json(`No Post with that id ${_id}`);
    }
    try{
        await PostMessage.findByIdAndDelete(_id);
        res.status(200).json({message: 'Post deleted successfully!'});
    }catch(err){
        console.error(err.message);
        //res.status(404).json(`Something Wrong Post does not delete`);
    }
}

export const likePost=async(req, res)=>{
    if(!req.userId){
        return res.status(400).json({message: 'Unauthenticated'});
    }
    const {id}=req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json(`No Post with that id ${id}`);
    }
    try{
       const post= await PostMessage.findById(id);
       if(post){
            const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1}, {new: true});
            return res.status(200).json(updatedPost);
        }
        
    }catch(err){
        console.error(err.message);
        //res.status(404).json(`Something Wrong Post does not delete`);
    }
    res.status(404).json(`Something Wrong with Like Post`);
}