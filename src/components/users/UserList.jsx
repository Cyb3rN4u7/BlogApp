import React from 'react';

import User from './User.jsx';

const UserList = ({ users }) => {
    return  <ul>
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
}

export default UserList;