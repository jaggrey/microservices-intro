import React from 'react';
import PostCreate from './PostCreate.component';
import PostList from './PostList.component';

export default () => {
  return (
    <div className="container">
      <h1>Create a Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
