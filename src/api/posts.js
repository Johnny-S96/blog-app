import { getData } from './api';

export const getAllPosts = () => getData('/posts')
  .catch(() => []);

