import axios from 'axios';

const API=axios.create( {baseURL:process.env.REACT_APP_API_URL});
const posts="/posts";
const user="/user";

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
     req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});
export const fetchPosts=(page)=>API.get(`${posts}?page=${page}`);
export const fetchPost=(id)=>API.get(`${posts}/${id}`);
export const createPost=(newPost)=>API.post(posts, newPost);
export const updatePost=(id, updatedData)=>API.patch(`${posts}/${id}`, updatedData); 
export const deletePost=(id)=>API.delete(`${posts}/${id}`);
export const likePost=(id)=>API.patch(`${posts}/${id}/likePost`);
export const searchPosts=(searchQuery)=>API.get(`${posts}/searchQuery?searchQuery=${searchQuery.search || "none"}&&tags=${searchQuery.tags}`);

export const signIn=(formData)=>API.post(`${user}/signin`, formData);

export const signUp=(formData)=>API.post(`${user}/signUp`, formData);
 
