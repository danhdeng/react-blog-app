import React,{useState, useEffect} from 'react'
import {Container, Grow, Grid, Paper} from '@material-ui/core';
import Posts from "../Posts/Posts.js";
import PostForm from "../Form/Form.js";
import useStyles from './styles.js';
import Paginate from '../Pagination/Pagination';

//use redux dispatch hook from react-redux
import {useDispatch} from "react-redux";
import {getPosts} from '../../actions/posts.js';

export default function Home() {
    const [currentId, setCurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container>
             <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <PostForm currentId={currentId} setCurrentId={setCurrentId} />
                                <Paper elevation={6}>
                                    <Paginate />
                                </Paper>
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
