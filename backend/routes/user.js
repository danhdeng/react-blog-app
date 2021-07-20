import express from "express";
import { signIn, signUp} from "../controller/user.js";

const router=express.Router();

router.post("/signup", signUp);
router.post("/signin", signUp);


export default router;