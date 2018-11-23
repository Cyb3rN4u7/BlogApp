import React from 'react'

import ConnectedPostList from '../containers/ConnectedPostList.jsx'
import ConnectedFilterList from '../containers/ConnectedFilterList.jsx'
import ConnectedUserList from '../containers/ConnectedUserList.jsx';

const App = ({ store }) =>
  <div className="container">
    <h1 className="center">React/Redux blog app</h1>
    <div className="center"><ConnectedFilterList store={store} /></div>
    <div className="row">
      <div style={{backgroundColor: '#47a52a',
                  margin: '1em',
                  color: '#fff'
                               }} 
       className="col m8"><ConnectedPostList store={store} />
       </div>
      <div style={{backgroundColor: 'brown',
                  margin: '1em',
                  color: '#fff'
                               }}
       className="col m3"> <ConnectedUserList store={store}/>
      </div>
    </div>
  </div>

export default App

