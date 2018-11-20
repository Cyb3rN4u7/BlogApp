console.log('Implementing reducers');
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';



let state = appReducer(undefined, 'INIT_ACTION');
console.log('initial state',state);
const action = createPost('Achilles', 'Learning Redux');
const action2 = createPost('nullWatch', 'Exploring Redux');
// const filter = setFilter('random');
// const newState = appReducer(initialState, action);
state = appReducer(state, action);
state = appReducer(state, action2);
state = appReducer(state, editPost(1,'Edited post'));
state = appReducer(state, setFilter('hidden'));

console.log('state',state);
