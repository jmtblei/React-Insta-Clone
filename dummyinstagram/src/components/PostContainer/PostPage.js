import React, { Component } from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filtered: []
    };
  }

  componentDidMount = () => {
    this.setState({
      posts: dummyData
    });
  };

  handlerSearch = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({
      filtered: posts
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar 
        searchPosts={this.handlerSearch} 
        />
        <PostContainer
          posts={
            this.state.filtered.length > 0
              ? this.state.filtered
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostPage;
