import React, { Component } from "react";
import "./App.css";
// import dummyData from "../src/dummy-data";
// import SearchBar from "./components/SearchBar/SearchBar";
// import PostContainer from "./components/PostContainer/PostContainer";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: [],
//       filtered: []
//     };
//   }

//   componentDidMount = () => {
//     this.setState({
//       posts: dummyData
//     });
//   };

//   handlerSearch = event => {
//     const posts = this.state.posts.filter(post => {
//       if (post.username.includes(event.target.value)) {
//         return post;
//       }
//     });
//     this.setState({
//       filtered: posts
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <SearchBar 
//         searchPosts={this.handlerSearch} 
//         />
//         <PostContainer
//           posts={
//             this.state.filtered.length > 0
//               ? this.state.filtered
//               : this.state.posts
//           }
//         />
//       </div>
//     );
//   }
// }
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
