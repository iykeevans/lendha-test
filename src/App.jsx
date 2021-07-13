import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages";
import NewPost from "./pages/newPost";
import Post from "./pages/post";
import Error404 from "./pages/error404";

import { $_fetchAllPosts } from "./services";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await $_fetchAllPosts();

        setPosts(data);
        setLoading(false);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  const updatePost = (data) => {
    const newPosts = [data, ...posts];

    setPosts(newPosts);
  };

  return (
    <Router>
      <div>
        <nav className="nav flex items-center justify-center w-full">
          <NavLink className="nav__link text-decoration-none mr-20" to="/">
            Home
          </NavLink>

          <NavLink className="nav__link text-decoration-none" to="/posts/new">
            New Post
          </NavLink>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/posts/new"
            render={(props) => <NewPost updatePost={updatePost} {...props} />}
          />

          <Route path="/posts/:id" component={Post} />

          <Route
            exact
            path="/"
            render={(props) => (
              <Home posts={posts} loading={loading} {...props} />
            )}
          />

          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}
