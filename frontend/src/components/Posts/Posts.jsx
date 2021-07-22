import React from 'react'
import useStyles from './styles.js';
import {useSelector} from "react-redux";
import {Grid, CircularProgress} from '@material-ui/core';
import PostItem from './Post/postItem.jsx';

export default function Posts({setCurrentId}) {
    const {posts, isLoading}=useSelector((state)=>state.posts);
    const classes=useStyles();
    if(!posts.length && !isLoading) return "No posts";
    if(isLoading) return  <CircularProgress />;
    return (
        posts && (
            <Grid className={classes.Grid} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
                        <PostItem post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}
