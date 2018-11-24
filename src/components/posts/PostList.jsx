import React from 'react'
import Post from './Post.jsx'

const PostList = ({ posts }) =>
   <div style={{backgroundColor: '#1a5213',
                margin: '1em',
                color: '#fff'
                              }} 
              className="col m8">
     <h5 className="center">Posts</h5>
          <ul>
          {
            posts.map(
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
   </div>

export default PostList

