import * as api from '../api';
import {FETCH_ALL, CREATE, DELETE, UPDATE, SEARCH} from '../constants/actionTypes';

export const getPosts=(page)=>async(dispatch) =>{
    try{
        const {data}=await api.fetchPosts(page);
        dispatch({type: FETCH_ALL, payload:data});
    
    }catch(error){
        console.log(error);
        console.log(error.response);
    }
}

export const createPost=(post)=>async(dispatch) =>{
    try{
        const {data}=await api.createPost(post);
        dispatch({type: CREATE, payload:data});
    
    }catch(error){
        console.log(error.response);
    }
}

export const updatePost=(id, post)=>async(dispatch) =>{
    try{
        const {data}=await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    
    }catch(error){
        console.log(error.response);
    }
    
}

export const deletePost=(id)=>async (dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type:DELETE, payload:id});
    }catch(error){
        console.log(error.response);
    }
}

export const likePost=(id)=>async(dispatch) =>{
    try{
        const {data}=await api.likePost(id);
        dispatch({type: UPDATE, payload: data});
    
    }catch(error){
        console.log(error.response);
    }
}

export const searchPosts=(searchQuery)=>async(dispatch) =>{
    try{
        const {data}=await api.searchPosts(searchQuery);
        dispatch({type: SEARCH, payload:data});
    
    }catch(error){
        console.log(error.response);
    }
}