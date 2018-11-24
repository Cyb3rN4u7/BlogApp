import React from 'react'

import User from '../users/User.jsx'
import Timestamp from '../Timestamp.jsx'
import Category from './Category.jsx';

const Post = ({ user, title, text, category, created, updated }) =>
  <span>
    <h6 className="center">{title}</h6>
    <p>{text}</p> 
    Category : <Category data={category} /><br/>
    (Created at: <Timestamp data={created} />, Updated at: <Timestamp data={updated} />) <br/>
    <i className="right">{' ~ '}<User {...user} /></i><br/>
  </span>

export default Post

