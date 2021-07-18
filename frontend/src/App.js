import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memoriesImg from './images/memories.png';
import Posts from "./components/Posts/Posts.js";
import PostForm from "./components/Form/Form.js";


export default function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memoriesImg} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing="4">
                            <Grid item xs={12} sm={4}>
                                <PostForm />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
