import { useEffect, useState } from 'react';
import './Homepage.css';
import { getAllPosts, addPost } from '../../api/posts';
import { PostsList } from '../../components/PostsList';
import { Loader } from '../../components/Loader';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, switchLoadingStatus] = useState(false);
  const [newPostTitle, setPostTitle] = useState('');
  const [newPostBody, setPostBody] = useState('');
  const [isPostListChanged, switchPostListStatus] = useState(false)

  useEffect(() => {
    switchLoadingStatus(true);
    getAllPosts().then(posts => {
      setPosts(posts)
      switchLoadingStatus(false);
    });
  }, [isPostListChanged]);

  const onPostAdd = event => {
    event.preventDefault();
    switchPostListStatus(!isPostListChanged);
    
    const newPost = {
      title: newPostTitle,
      body: newPostBody
    };

    addPost(newPost);
  }

  const handlePostTitleChange = ({ target }) => {
    setPostTitle(target.value);
  }

  const handlePostBodyChange = ({ target }) => {
    setPostBody(target.value);
  }

  return (
    <div className="homepage">
      <form onSubmit={event => onPostAdd(event)}>
        <h2>Create Post</h2>
        <div className="input-group mb-3">
          <label className="input-group-text" id="basic-addon2">title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Write here..."
            value={newPostTitle}
            onChange={event => handlePostTitleChange(event)}
          />
        </div>
        <div className="input-group">
          <label className="input-group-text">body</label>
          <textarea
            className="form-control"
            placeholder="Write here..."
            value={newPostBody}
            onChange={event => handlePostBodyChange(event)}
          ></textarea>
        </div>
        <button className="btn btn-success">
          Create
        </button>
      </form>
      {
        isLoading
          ? <Loader />
          : (
            <PostsList
              posts={posts}
              isPostListChanged={isPostListChanged}
              switchPostListStatus={switchPostListStatus}
            />
          )
      }
    </div>
  );
}
