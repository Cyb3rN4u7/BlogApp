import { CREATE_POST, EDIT_POST, DELETE_POST } from '../actionTypes';

export default function postsReducer (state =[], action) {
    const {type, post} = action;
    switch(type) {
        case CREATE_POST:{
            const ts = Date.now();
            return [...state, {...post, created: ts, updated: ts}];
        }
        case EDIT_POST:{
            const {id} = action;
            return state.map((oldPost,index)=>{
                index === id ? {...oldPost, ...post, updated: Date.now()} : oldPost
            });
        }
        case DELETE_POST:{
            const {id} = action;
            return state.filter((post,index)=>{
                index !== id
            });
        }
        default:
            return state;
    }
}

