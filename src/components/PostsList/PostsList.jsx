import React from 'react';

export const PostsList = ({ posts }) => (
  <table className="table">
    <thead>
      <tr className="table-dark">
        <th scope="col">#</th>
        <th scope="col">Post</th>
        <th scope="col">Go to</th>
      </tr>
    </thead>
    <tbody>
      {posts.map(post => (
        <tr key={post.id} className="table-info">
          <th scope="row">{post.id}</th>
          <td>{post.title}</td>
          <td className="table-success">
            <button></button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
