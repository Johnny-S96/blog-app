import React from 'react';
import { NavLink } from 'react-router-dom';
import { deletePost } from '../../api/posts';

export const PostsList = ({
  posts,
  isPostListChanged,
  switchPostListStatus,
}) => {
  const onPostDelete = (postId) => {
    deletePost(postId);
    switchPostListStatus(!isPostListChanged);
  }

  return (
    <div>
      <h2>Post List</h2>
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Post</th>
            <th scope="col">Go to</th>
            <th scope="col">Update post</th>
            <th scope="col">Delete post</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id} className="table-light">
              <th scope="row">{post.id}</th>
              <td>{post.title}</td>
              <td>
                <NavLink className="btn btn-primary" to="/">
                  Details
                </NavLink>
              </td>
              <td>
                <NavLink className="btn btn-warning" to="/post-details/:postId">
                  Update
                </NavLink>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  to="/post-details/:postId"
                  onClick={onPostDelete(post.id)}
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
}
