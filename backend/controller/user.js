import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import User from "../model/user.js";
import jwt from 'jsonwebtoken';

export const signIn=async (req, res)=>{
    const {email, password} = req.body;
    try{
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message: "User does not exist!"});
        }
        const isPasswordMatch=bcrypt.compare(password, existingUser.password);
        if(!isPasswordMatch){
            return res.status(400).json({message: "Invalid credential!"});
        }
        const token=jwt.sign({email: existingUser.email, _id: existingUser._id}, process.env.SECRET, {expiresIn: "1h"});
        res.status(200).json({result:existingUser, token});
    }catch(err){
        console.error(err.message);
        res.status(500).json({message: 'Something went wrong'});
    }
}

export const signUp=async (req, res)=>{
    const {firstName, lastName, email, password, confirmPassword} = req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "User already exist!"});
    }
    if(password !== confirmPassword){
        return res.status(400).json({message: "Password do not match"});
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    try{
        const newUser = await User.create({ firstName, lastName, email, password:hashPassword, name:`${firstName} ${lastName}` });
        const token=jwt.sign({email: newUser.email, _id: newUser._id}, process.env.SECRET, {expiresIn: "1h"});
        res.status(200).json({result:newUser, token});

    }catch(err){
        console.error(err.message);
        res.status(500).json({message: 'Something went wrong'});
    }
}
