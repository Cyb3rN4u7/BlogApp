import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';
import { combineReducers } from 'redux';

 function postsReducer(state = [], action){
    const {type, user='anon'} = action;

    switch(type){

        case CREATE_POST: {
            const {type , ...post} = action;
            return [...state, post];
        }
        case EDIT_POST: {
            const {type, id, ...newPost} = action;
            return state.map((oldPost,index) =>{
                return id === index ? {...oldPost , ...newPost} : oldPost
            });
        }
        default:
            return state;
    }
}

 function filterReducer(state = 'all', action) {
    const { type, filter } = action;
    if(type === SET_FILTER) {
        return filter;
    }
    return state;
}

const appReducer = combineReducers({
        posts: postsReducer,
        filter: filterReducer
    });


export default appReducer;