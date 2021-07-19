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

export const deletePost=(req, res)=>{
    try{

    }catch(err){
        console.error(err.message);
    }
}