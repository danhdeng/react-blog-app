
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoute from './routes/posts.js';
import userRoute from './routes/user.js';
dotenv.config();

const app=express();

// app.use(bodyParser.urlencoded({limit:'25mb', extended:true}));
// app.use(bodyParser.json({limit:'25mb'}));
app.use(express.urlencoded({limit:'25mb', extended:true}));
app.use(express.json({limit:'25mb'}));

app.use(cors());

app.use("/posts", postRoute);
app.use("/user", userRoute);


const PORT=process.env.PORT ||5000;
mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`server is running on port: ${PORT}`)))
    .catch(error=>console.error(error.message));

mongoose.set('useFindAndModify', false);