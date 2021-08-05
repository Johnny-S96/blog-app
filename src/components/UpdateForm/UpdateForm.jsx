import React, { useState } from 'react';

export const UpdateForm = ({ formPurpose, onSubmit }) => {
  const [newPostTitle, setPostTitle] = useState('');
  const [newPostBody, setPostBody] = useState('');

  return (
    <form onSubmit={(event) => {
        onSubmit(event, newPostTitle, newPostBody);
        setPostTitle('');
        setPostBody('');
    }}>
      <h2>{`${formPurpose} Post`}</h2>
      <div className="input-group mb-3">
        <label className="input-group-text" id="basic-addon2">title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Write here..."
          value={newPostTitle}
          onChange={event => setPostTitle(event.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label className="input-group-text">body</label>
        <textarea
          className="form-control"
          placeholder="Write here..."
          value={newPostBody}
          onChange={event => setPostBody(event.target.value)}
          required
        ></textarea>
      </div>
      <button className="btn btn-success">
        {formPurpose}
      </button>
    </form>
  );
}
