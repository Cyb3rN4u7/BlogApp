import React from 'react';

import User from './User.jsx';

const UserList = ({ users }) => {
    return  <ul>
                {
                    users.map((user, i) => 
                    <li key={i}><User {...user}/></li>
                    )
                }
            </ul>
}

export default UserList;