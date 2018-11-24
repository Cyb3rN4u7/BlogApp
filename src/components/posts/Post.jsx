import React from 'react'

import User from '../users/User.jsx'
import Updated from './Updated.jsx';
import Category from './Category.jsx';

const Post = ({ user, title, text, category, created, updated }) =>
  <span>
    <h6 className="center">{title}</h6>
    <p>{text}</p> 
    Category : <Category data={category} /><br/>
    <Updated created={created} updated={updated} /> <br/>
    <i style={{color: '#e8e71a'}} className="right">{' ~ '}<User {...user} /></i><br/>
  </span>


export default Post

