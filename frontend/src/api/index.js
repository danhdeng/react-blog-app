import axios from 'axios';

const url=process.env.REACT_APP_API_URL;

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url, newPost);
export const updatePost=(id, updatedData)=>axios.patch(`${url}/${id}`, updatedData); 
export const deletePost=(id)=>axios.delete(`${url}/${id}`);
