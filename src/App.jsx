import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PostDetailsPage } from './pages/PostDetailsPage';

export const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/post-details/:postId">
        <PostDetailsPage />
      </Route>
      <Redirect path="/home" to="/" />

      <NotFoundPage />
    </Switch>
  </div>
);
