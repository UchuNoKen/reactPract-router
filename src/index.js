import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

// components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <br />
          <Link to={{ pathname: "/profile", hash: "#you", search: "?profile=true" }}>Profile</Link>
          <br />
          <hr />
        </header>
        <h1>MySite</h1>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
