import React from 'react';

const Post = ({user, text}) => {

    return (
       <span><b>{user}</b> - {text}</span>
    )
}

export default Post;