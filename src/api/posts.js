import { getData, BASE_URL } from './api';

export const getAllPosts = () => getData('/posts')
  .catch(() => []);

export const addPost = async(post) => {
  await fetch(`${BASE_URL}/posts`, {
    method: 'Post',
    body: JSON.stringify(post),
  });
};

export const deletePost = async(postId) => {
  await fetch(`${BASE_URL}/posts/${postId}`, {
    method: 'DELETE',
  });
};
