import React, { useState } from 'react';
import './CommentForm.css'

export const CommentForm = ({ onSubmit }) => {
  const [newCommentBody, setCommentBody] = useState('');

  return (
    <form onSubmit={(event) => {
        onSubmit(event, newCommentBody);
        setCommentBody('');
    }}>
      <h2>Write Comment</h2>
      <div className="input-group">
        <label className="input-group-text">body</label>
        <textarea
          className="form-control"
          placeholder="Write here..."
          value={newCommentBody}
          onChange={event => setCommentBody(event.target.value)}
          required
        ></textarea>
      </div>
      <button className="btn btn-success">
        Write
      </button>
    </form>
  );
}
