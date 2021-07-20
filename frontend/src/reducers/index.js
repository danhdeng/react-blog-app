import {combineReducers} from 'redux';
import { userReducer } from './auth';

import {postsReducer} from './posts';

export default combineReducers({
    posts: postsReducer,
    user: userReducer,
});