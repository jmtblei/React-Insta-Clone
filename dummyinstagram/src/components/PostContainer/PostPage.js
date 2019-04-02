import React, { Component } from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import styled from 'styled-components';

const LogOut = styled.button`
  margin: 10px 0 5px;
  padding: 5px 30px;
  background-color: #4DA4FE;
  color: white;
  font-weight: 700;
  &:hover {
    background-color: white;
    color: #4DA4FE;
  }
;`

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

  componentDidMount() {
    localStorage.getItem('user') && localStorage.getItem('pw')
  }

  handleLogOut = event => {
    localStorage.clear()
    this.setState({ loggedIn: false });
    window.location.reload();
}

  render() {
    return (
      <div className="App">
        <LogOut onClick={this.handleLogOut}>Log Out</LogOut>
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
