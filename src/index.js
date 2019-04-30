import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

// components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import PostItem from "./components/PostItem";
import Life from "./components/Life";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink to="/posts" activeStyle={{ color: "red" }} activeClassName="selected">
            Posts
          </NavLink>
          <br />
          <NavLink to={{ pathname: "/profile", hash: "#you", search: "?profile=true" }}>
            Profile
          </NavLink>
          <br />
          <NavLink to="/life">Life</NavLink>
          <br />
          <hr />
        </header>
        <h1>MySite</h1>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Route path="/life" component={Life} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
