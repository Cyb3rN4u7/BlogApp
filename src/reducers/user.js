import { CREATE_USER } from '../actionTypes';

export default function usersReducer (state = [], action) {
    if (action.type === CREATE_USER) {
        const { user } = action;
        return [...state,user];
    }
    return state;
}