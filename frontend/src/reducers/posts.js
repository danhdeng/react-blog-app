import {FETCH_ALL, CREATE, DELETE, UPDATE, SEARCH} from '../constants/actionTypes';

export const postsReducer =(state={ isLoading: true, posts: [] }, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                ...state, 
                currentPage: action.payload.currentPage,
                posts: action.payload.data,
                numberOfPages: action.payload.numberOfPages
            };
        case SEARCH:
            return {...state, posts:action.payload};
        case CREATE:
            return{...state, posts:[...state.posts, action.payload]};
        case UPDATE:
            return {...state, posts:state.posts.map((post)=>(post._id===action.payload._id ? action.payload : post))};
        case DELETE:
            return {...state, posts:state.posts.filter((post)=>(post._id !== action.payload))};
        default:
            return state;
    }
}
