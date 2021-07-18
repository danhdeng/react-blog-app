import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memoriesImg from './images/memories.png';
import Posts from "./components/Posts/Posts.js";
import PostForm from "./components/Form/Form.js";
import useStyles from './styles.js';

//use redux dispatch hook from react-redux
import {useDispatch} from "react-redux";

import {getPosts} from './actions/posts';


export default function App() {
    console.log("api url:", process.env.REACT_APP_API_URL);
    const classes=useStyles();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memoriesImg} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <PostForm />
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};
