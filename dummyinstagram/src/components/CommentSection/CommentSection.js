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

  commentHandler = event => {
      this.setState({
        inputText: event.target.value
      });
  }

  handleAddComment = event => {
      event.preventDefault();
      const newComment = {
          username: 'jmtblei',
          text: this.state.inputText
      }
      console.log(newComment)
      this.setState({
          comments: [...this.state.comments, newComment],
          inputText:'' 
      })
    
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
        comment={this.state.inputText} 
        commentInput={this.commentHandler}
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
