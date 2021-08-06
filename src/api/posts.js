import { getData, BASE_URL } from './api';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const getAllPosts = () => getData('/posts/?_embed=comments')
  .catch(() => []);

export const getAllPosts2 = () => getData('/posts/?_embed=comments')
  .catch(() => []);

export const addPost = async(post) => {
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(post),
    redirect: 'follow'
  };

  await fetch(`${BASE_URL}/posts`, requestOptions);
};

export const deletePost = async(postId) => {
  const requestOptions = {
    method: 'DELETE',
  };

  await fetch(`${BASE_URL}/posts/${postId}`, requestOptions);
};

export const updatePost = async(post, postId) => {
  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(post),
    redirect: 'follow'
  };

  await fetch(`${BASE_URL}/posts/${postId}`, requestOptions);
};
