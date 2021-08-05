import { useEffect, useState } from 'react';
import './Homepage.css';
import { getAllPosts, addPost, deletePost } from '../../api/posts';
import { PostsList } from '../../components/PostsList';
import { Loader } from '../../components/Loader';
import { UpdateForm } from '../../components/UpdateForm';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, switchLoadingStatus] = useState(false);
  const [isPostListChanged, switchPostListStatus] = useState(false)

  useEffect(() => {
    switchLoadingStatus(true);
    getAllPosts().then(posts => {
      setPosts(posts)
      switchLoadingStatus(false);
    });
  }, [isPostListChanged]);

  const onPostAdd = async(event, title, body) => {
    event.preventDefault();

    const newPost = {
      title,
      body
    };

    await addPost(newPost);
    switchPostListStatus(!isPostListChanged);
  }

  const onPostDelete = async(postId) => {
    await deletePost(postId);
    switchPostListStatus(!isPostListChanged);
  }

  return (
    <div className="homepage">
      <UpdateForm onSubmit={onPostAdd} formPurpose="Create" />
      {
        isLoading
          ? <Loader />
          : (
            <PostsList
              posts={posts}
              onPostDelete={onPostDelete}
            />
          )
      }
    </div>
  );
}
