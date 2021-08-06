import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './PostDetailsPage.css'
import { getAllPosts, updatePost } from '../../api/posts';
import { addComment } from '../../api/comments';
import { Loader } from '../../components/Loader';
import { PostDetails } from '../../components/PostDetails';
import { UpdateForm } from '../../components/UpdateForm';
import { CommentForm } from '../../components/CommentForm';

export const PostDetailsPage = withRouter(
  ({ match }) => {
    const [currentPost, setCurrentPost] = useState(null);
    const [shouldUpdate, switchShouldUpdateStatus] = useState(false)
    const [shouldWriteComment, switchShouldWriteCommentStatus] = useState(false)
    const currentPostId = Number(match.params.postId);

    useEffect(() => {
      getAllPosts().then(posts => {
        const relevantPost = posts.find(post => post.id === currentPostId);
        setCurrentPost(relevantPost);
      });
    }, [currentPostId, shouldUpdate, shouldWriteComment])

    const onPostUpdate = async(event, title, body) => {
      event.preventDefault();
  
      const updatedPost = {
        title,
        body
      };

      await updatePost(updatedPost, currentPostId);
      switchShouldUpdateStatus(false);
    }

    const onCommentAdd = async(event, body) => {
      event.preventDefault();
  
      const newComment = {
        postId: currentPostId,
        body
      };

      await addComment(newComment);
      switchShouldWriteCommentStatus(false);
    }

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
          <button
            type="button"
            className="btn btn-success"
            onClick={() => switchShouldWriteCommentStatus(!shouldWriteComment)}
          >
            Write comment
          </button>
        </div>
        {shouldWriteComment && <CommentForm onSubmit={onCommentAdd} />}
        {shouldUpdate && (
          <UpdateForm
            onSubmit={onPostUpdate}
            formPurpose="Update"
          />
        )}
      </div>
    );
  }
);
