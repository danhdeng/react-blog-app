import React from 'react'
import useStyles from './styles.js';
import {useSelector} from "react-redux";

export default function Posts() {
    const posts=useSelector((state)=>state.posts);
    console.log("posts: ", posts);
    const classes=useStyles();
    return (
        <div>
            Hello Posts!
        </div>
    )
}
