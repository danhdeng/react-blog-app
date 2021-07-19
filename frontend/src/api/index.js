import axios from 'axios';

const url=process.env.REACT_APP_API_URL;

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url, newPost);

