
export const postsReducer = (posts=[], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payLoad;
        case 'CREATE':
            return [...posts, action.payLoad];
        default:
            return posts;
    }
}
