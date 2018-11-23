import React from 'react'
import Post from './Post.jsx'

const PostList = ({ posts }) =>
  <ul>
    {posts.map(
      (post, i) =>
        <li style={{
          backgroundColor: '#337a1d',
          margin: '0.5em',
          padding: '5px'
        }}
        key={i.toString()}>
          <Post {...post} />
        </li>
    )}
  </ul>

export default PostList

