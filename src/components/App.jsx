import DevTools from '../containers/DevTools.jsx';
import React from 'react'
import { Provider } from 'react-redux';

import ConnectedPostList from '../containers/ConnectedPostList.jsx'
import ConnectedFilterList from '../containers/ConnectedFilterList.jsx'
import ConnectedUserList from '../containers/ConnectedUserList.jsx';

const App = ({ store }) =>
  <Provider store ={store}>
 <div className="container">
    <h1 className="center">React/Redux blog app</h1>
    <div className="row center">
      <div className="col m8"><ConnectedFilterList /></div>
    </div>
    <div className="row">
      <div><ConnectedPostList /></div>
      <div><ConnectedUserList /></div>
    </div>
    {(process.env.NODE_ENV !== 'production') && <DevTools />}
  </div>
  </Provider>
 

export default App

