import React from 'react'

import User from '../users/User.jsx'
import Timestamp from '../Timestamp.jsx'
import Category from './Category.jsx';

const Post = ({ user, title, text, category, created, updated }) =>
  <span>
    <b>{title}</b>: {text}
    <i>{' ~ '}<User {...user} /></i><br />
    (Created at: <Timestamp data={created} />, Updated at: <Timestamp data={updated} />) <Category data={category} />
  </span>

export default Post

