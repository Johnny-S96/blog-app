import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './PostDetailsPage.css'
import { getAllPosts } from '../../api/posts';
import { Loader } from '../../components/Loader';
import { PostDetails } from '../../components/PostDetails';
import { UpdateForm } from '../../components/UpdateForm';

export const PostDetailsPage = withRouter(
  ({ match }) => {
    const [currentPost, setCurrentPost] = useState(null);
    const [shouldUpdate, switchShouldUpdateStatus] = useState(false)
    const currentPostId = Number(match.params.postId);

    useEffect(() => {
      getAllPosts().then(posts => {
        const relevantPost = posts.find(post => post.id === currentPostId);
        setCurrentPost(relevantPost)
      });
    }, [currentPostId])

    return currentPost === null ? <Loader /> : (
      <div className="post-details">
        <PostDetails post={currentPost} />
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <NavLink className="btn btn-primary" to="/">
            Go to Homepage
          </NavLink>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => switchShouldUpdateStatus(!shouldUpdate)}
          >
            Update post
          </button>
          <button type="button" className="btn btn-success">Open comments</button>
        </div>
        {shouldUpdate && <UpdateForm formPurpose="Update" />}
      </div>
    );
  }
);
