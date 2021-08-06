import React from 'react';

export const PostDetails = ({ post }) => (
  <div className="card text-white bg-secondary mb-3">
    <div className="card-header">{`#${post.id} Post Details`}</div>
    <div className="card-body">
      <h5 className="card-title">{`Title: ${post.title}`}</h5>
      <h5 className="card-title">{`Body: ${post.body}`}</h5>
      <h5 className="card-title">Comments:</h5>
      {post.comments.map((comment, index) => (
        <p key={comment.id} className="card-text">
          {`${index + 1}: ${comment.body}`}
        </p>
      ))}
    </div>
  </div>
);
