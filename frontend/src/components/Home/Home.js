import React,{useState, useEffect} from 'react'
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import Posts from "../Posts/Posts.js";
import PostForm from "../Form/Form.js";
import useStyles from './styles.js';
import Pagination from '../Pagination/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

//use redux dispatch hook from react-redux
import {useDispatch} from "react-redux";
import {getPosts, searchPosts} from '../../actions/posts.js';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function Home() {
    const [currentId, setCurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();
    // const query=useQuery();
    const history=useHistory();
    // const page=query.get('page')||1;
    // const searchQuery=query.get('searchQuery');
    const [search, setSearch]=useState('');
    const [tags, setTags]=useState([]);
    const handelKeyPress=(e)=>{
        if(e.keyCode===13){
            searchPost();
        }
    }
    const searchPost=()=>{
        if(search.trim()){
            dispatch(searchPosts({search, tags: tags.join(',')}));
        }
        else{
            history.push('/');
        }
    }
    const handleAddChip = (tag) => setTags([...tags, tag]);
    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return (
             <Grow in>
                <Container maxWidth="xl">
                    <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={6} md={9}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                    <TextField
                                        name="search"
                                        variant="outlined"
                                        label="search"
                                        fullWidth
                                        value={search}
                                        onChange={(e)=>setSearch(e.target.value)}
                                        onKeyPress={handelKeyPress}
                                    />
                                    <ChipInput 
                                        style={{margin:'10px 0'}}
                                        value={tags}
                                        onAdd={(chip) => handleAddChip(chip)}
                                        onDelete={(chip) => handleDeleteChip(chip)}
                                        label="Search Tags"
                                        variant="outlined"
                                    />
                                    <Button className={classes.searchButton} onClick={searchPost} color="primary" variant="contained" >Search</Button>
                                </AppBar>
                                <PostForm currentId={currentId} setCurrentId={setCurrentId} />
                                <Paper elevation={6}>
                                    <Pagination />
                                </Paper>
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}
