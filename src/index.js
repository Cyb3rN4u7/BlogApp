
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import appReducer from './reducers/index.js';
import { createUser, createPost } from './actions/index.js'

import ConnectedPostList from './containers/ConnectedPostList.jsx';



let store = createStore(appReducer);
console.log('store',store.getState());


store.dispatch(createPost('dan', {
    title: 'Post title',
    text: 'Hello world..?',
    category: 'welcome'
}));
store.dispatch(createPost('achi', {
    title: 'This is weird',
    text: 'Hello weird..?',
    category: 'test'
}));
setTimeout(()=> store.dispatch(
    createPost('ron', {
    title: 'Loose weight',
    text: 'But still eats pizza',
    category: 'food'
})), 2000);

ReactDOM.render(
    <ConnectedPostList store={store} /> ,
    document.getElementById('root')
)

// const stopRender = store.subscribe(render);

store.subscribe(()=> console.log('state changed: ', store.getState()))


