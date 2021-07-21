import * as api from '../api';
import {FETCH_ALL, CREATE, DELETE, UPDATE} from '../constants/actionTypes';

export const getPosts=()=>async(dispatch) =>{
    try{
        const {data}=await api.fetchPosts();
        dispatch({type: FETCH_ALL, payLoad:data});
    
    }catch(error){
        console.log(error.response);
    }
}

export const createPost=(post)=>async(dispatch) =>{
    try{
        const {data}=await api.createPost(post);
        dispatch({type: CREATE, payLoad:data});
    
    }catch(error){
        console.log(error.response);
    }
}

export const updatePost=(id, post)=>async(dispatch) =>{
    try{
        const {data}=await api.updatePost(id, post);
        dispatch({type: UPDATE, payLoad: data});
    
    }catch(error){
        console.log(error.response);
    }
    
}

export const deletePost=(id)=>async (dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type:DELETE, payLoad:id});
    }catch(error){
        console.log(error.response);
    }
}

export const likePost=(id)=>async(dispatch) =>{
    try{
        const {data}=await api.likePost(id);
        dispatch({type: UPDATE, payLoad: data});
    
    }catch(error){
        console.log(error.response);
    }
}