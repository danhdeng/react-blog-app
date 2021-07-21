import React from 'react'
import useStyles from './styles.js';
import {useSelector} from "react-redux";
import {Grid, CircularProgress} from '@material-ui/core';
import PostItem from './Post/postItem.js';

export default function Posts({setCurrentId}) {
    const {posts}=useSelector((state)=>state.posts);
    console.log("post:", posts);
    const classes=useStyles();
    return (
        !posts?.length ? <CircularProgress /> : (
            <Grid className={classes.Grid} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid item key={post._id} xs={12} sm={6}>
                        <PostItem post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}
