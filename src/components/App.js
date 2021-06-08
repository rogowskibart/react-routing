import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "./posts/PostList";
import PostCreate from "./posts/PostCreate";
import Post from "./posts/Post";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/posts" exact component={PostList} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/create" component={PostCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
