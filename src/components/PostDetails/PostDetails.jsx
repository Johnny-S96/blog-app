import React from 'react';

export const PostDetails = ({ post }) => (
  <div className="card text-white bg-secondary mb-3">
    <div className="card-header">{`#${post.id} Post Details`}</div>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
    </div>
  </div>
);
