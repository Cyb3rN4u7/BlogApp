import React from 'react';

import User from './User.jsx';

const UserList = ({ users }) => {
    return   <div style={{backgroundColor: 'brown',
                                    margin: '1em',
                                    color: '#fff'
                                                }}
                                className="col m3">
                    <h5 className="center">Users</h5>
                    <ul>
                {
                    users.map((user, i) => 
                    <li style={{
                        backgroundColor: '#6e1a1a',
                        margin: '0.5em',
                        padding: '5px'
                      }}
                    key={i}><User {...user}/></li>
                    )
                }
                    </ul>
            </div>
}

export default UserList;