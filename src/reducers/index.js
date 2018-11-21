import { combineReducers } from 'redux';
import filterReducer from './filter';
import postsReducer from './posts';
import usersReducer from './user';

export default combineReducers({
    filter: filterReducer,
    posts: postsReducer,
    users: usersReducer
});