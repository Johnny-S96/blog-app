import React from 'react';
import { NavLink } from 'react-router-dom';

export const PostsList = ({ posts, onPostDelete }) => (
  <div>
    <h2>Post List</h2>
    <table className="table">
      <thead>
        <tr className="table-dark">
          <th scope="col">#</th>
          <th scope="col">Post</th>
          <th scope="col">Go to</th>
          <th scope="col">Delete post</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id} className="table-light">
            <th scope="row">{post.id}</th>
            <td>{post.title}</td>
            <td>
              <NavLink className="btn btn-primary" to={`/post-details/${post.id}`}>
                Details
              </NavLink>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                to="/post-details/:postId"
                onClick={() => onPostDelete(post.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
