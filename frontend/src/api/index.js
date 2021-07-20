import axios from 'axios';

const postUrl=process.env.REACT_APP_POST_API_URL;
const userUrl=process.env.REACT_APP_USER_API_URL;

export const fetchPosts=()=>axios.get(postUrl);
export const createPost=(newPost)=>axios.post(postUrl, newPost);
export const updatePost=(id, updatedData)=>axios.patch(`${postUrl}/${id}`, updatedData); 
export const deletePost=(id)=>axios.delete(`${postUrl}/${id}`);
export const likePost=(id)=>axios.patch(`${postUrl}/${id}/likePost`);

export const signIn=(formData)=>axios.post(`${userUrl}/signin`);

export const signUp=(formData)=>axios.post(`${userUrl}/signUp`);
 
