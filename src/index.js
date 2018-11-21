console.log('Combining Redux with React');
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';



let store = createStore(appReducer,{});
console.log('store',store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('state changed:',store.getState())
});


const root = document.getElementById('root');

ReactDOM.render(
    <h1>hello</h1>,
    document.getElementById('root')
)

// const stopRender = store.subscribe(render);

store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('des', 'second post'));


