import React from 'react';
import Post from './Post.jsx';

const PostList = ({posts}) => {

    return (
        <ul>
       { 
           posts.map((post, index)=>{
            return <li key={index.toString()}><Post {...post}/> </li>
        })
        }
        </ul>
    );
}

export default PostList;