console.log('Creating the store');
import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';



let store = createStore(appReducer,{});
console.log('store',store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('state changed:',store.getState())
});


const root = document.getElementById('root');

const render = () => {   
    root.innerHTML = '';
    const { posts } = store.getState();
    posts.forEach((post, index) => {
        const item = document.createElement('li');
        item.addEventListener('click', () =>{
            store.dispatch(editPost(index,post.text+'!'))
        });
        const text = document.createTextNode(`${post.user} - ${post.text}`);
        item.appendChild(text);
        root.appendChild(item);
    });
}

const stopRender = store.subscribe(render);

store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('des', 'second post'));
// const action2 = createPost('nullWatch', 'Exploring Redux');
// // const filter = setFilter('random');
// // const newState = appReducer(initialState, action);
// state = appReducer(state, action);
// state = appReducer(state, action2);
// state = appReducer(state, editPost(1,'Edited post'));
// state = appReducer(state, setFilter('hidden'));

