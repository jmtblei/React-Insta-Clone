import React, { Component } from "react";
import "./App.css";
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;
