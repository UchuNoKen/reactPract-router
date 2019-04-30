import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Header</h1>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
