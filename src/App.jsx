import './App.css';
import { useEffect, useState } from 'react';
import { getAllPosts } from './api/posts';
import { PostsList } from './components/PostsList';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(posts => setPosts(posts));
  }, []);

  return (
    <div className="App">
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
