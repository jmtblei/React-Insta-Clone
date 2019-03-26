import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import LikesContainer from './LikesContainer';
import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes
      };
    }
    upLike = () => {
      let likes = this.state.likes + 1;
      this.setState({ likes });
    };
    render() {
      return (
        <div className="top-border">
            <div className="post-container">
                <div className="thumbnail-username">
                    <div className="thumbnail">
                            <img 
                            src={this.props.post.thumbnailUrl}
                            alt=""
                            />
                    </div>
                    <div className="weighted indented">
                        <p>
                            {this.props.post.username}                      
                        </p>
                    </div>
                </div>
                <div>
                    <img 
                    src={this.props.post.imageUrl}
                    alt=""
                    />
                </div>
                    <LikesContainer 
                    upLike={this.upLike}
                    likes={this.state.likes}
                    />
                <div>
                    <CommentSection 
                    comments={this.props.post.comments}
                    />
                </div>
                <div className="faded">
                    {this.props.post.timestamp}
                </div>
            </div>
        </div>
      )}
}

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };

export default Post;