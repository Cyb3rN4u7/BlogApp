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
    <div className="center"><ConnectedFilterList /></div>
    <div className="row">
      <div style={{backgroundColor: '#47a52a',
                  margin: '1em',
                  color: '#fff'
                               }} 
       className="col m8"><ConnectedPostList  />
       </div>
      <div style={{backgroundColor: 'brown',
                  margin: '1em',
                  color: '#fff'
                               }}
       className="col m8"> <ConnectedUserList />
      </div>
    </div>
    <DevTools />
  </div>
  </Provider>
 

export default App

