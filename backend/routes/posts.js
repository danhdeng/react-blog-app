import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, searchPosts, getPost } from "../controller/posts.js";
import {auth} from '.././/middleware/auth.js';

const router=express.Router();

router.get("/",getPosts);
router.get("/:id", getPost);
router.post("/",auth, createPost);
router.patch("/:id",auth, updatePost);
router.delete("/:id",auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.get("/searchQuery",searchPosts);

export default router;