
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';


import ConnectedPostList from './components/ConnectedPostList.jsx';



let store = createStore(appReducer);
console.log('store',store.getState());


store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('des', 'second post'));
setTimeout(()=> store.dispatch(createPost('Achilles','Phones and more!')), 2000);

ReactDOM.render(
    <ConnectedPostList store={store} /> ,
    document.getElementById('root')
)

// const stopRender = store.subscribe(render);




