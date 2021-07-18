import PostMessage from "../model/postMessage.js";

export const getPosts=async (req, res)=>{
    try{
        const postMessage=await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    }catch(err){
    
        console.error(err.message);
        res.status(404).json({message: err.message});
    }
}

export const createPost=async (req, res)=>{
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

      try{
        await newPostMessage.save();
        res.status(201).json(newPostMessage);

    }catch(err){
        console.error(err.message);
        res.status(409).json({message: err.message});
    }
}

export const updatePost=(req, res)=>{
    try{

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