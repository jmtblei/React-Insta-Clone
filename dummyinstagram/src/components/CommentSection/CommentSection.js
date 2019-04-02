import React from "react";
import Comment from "./Comment";
import CommentForm from './CommentForm';
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText:''
    };
  }

  componentDidMount() {
    localStorage.getItem('user')
  }

  handleCommentInput = event => {
      this.setState({
        inputText: event.target.value
      });
  }

  handleAddComment = event => {
      event.preventDefault();
      const newComment = { 
          username: localStorage.getItem('user'),
          text: this.state.inputText
      }
      console.log(newComment)
      this.setState({
          comments: [...this.state.comments, newComment],
          inputText:'' 
      }, console.log(this.state.comments))
    
  }

  render() {
    return (
      <div>
        {this.state.comments.map((coms, index) => (
          <Comment key={index} 
          comment={coms} 
          />
        ))}
        <CommentForm
        inputText={this.state.inputText} 
        commentInput={this.handleCommentInput}
        addComment={this.handleAddComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
  )
};

export default CommentSection;
