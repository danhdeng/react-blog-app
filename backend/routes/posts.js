import express from "express";
import { getPosts, createPost } from "../controller/posts.js";

const router=express.Router();

router.get("/",getPosts);

router.post("/", createPost);

router.put("/",(req, res)=>{
    
});

router.delete("/",(req, res)=>{
    
});

export default router;