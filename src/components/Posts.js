import React from 'react';

const Posts = ({ posts }) => {

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <div key={post.id} className='list-group-item d-flex align-items-center'>
          <span className='count'>{post.id}</span>
          <p className='m-0 ms-3 me-3'>{post.title}</p>
        </div>
      ))}
    </ul>
  );
};

export default Posts;