import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, searchPosts, getPost, createComment } from "../controller/posts.js";
import {auth} from '.././/middleware/auth.js';

const router=express.Router();

router.get("/search",searchPosts);
router.get("/",getPosts);
router.get("/:id", getPost);
router.post("/",auth, createPost);
router.post("/:id/commentPost",auth, createComment);
router.patch("/:id",auth, updatePost);
router.delete("/:id",auth, deletePost);
router.patch("/:id/likePost", auth, likePost);


export default router;