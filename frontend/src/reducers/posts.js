import {FETCH_ALL, CREATE, DELETE, UPDATE} from '../constants/actionTypes';

export const postsReducer = (posts=[], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payLoad;
        case CREATE:
            return [...posts, action.payLoad];
        case UPDATE:
            return posts.map((post)=>(post._id===action.payLoad._id ? action.payLoad : post));
        case DELETE:
            return posts.filter((post)=>(post._id !== action.payLoad));
        default:
            return posts;
    }
}
