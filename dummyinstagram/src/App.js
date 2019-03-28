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

//   componentDidMount() {
//     localStorage.getItem('user') && localStorage.getItem('pw')
//   }

//   handleLogOut = event => {
//     localStorage.clear()
//     this.setState({ loggedIn: false });
//     window.location.reload();
// }

  render() {
    return (
      <div>
        {/* <button onClick={this.handleLogOut}>Logout</button> */}
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;
