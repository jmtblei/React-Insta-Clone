import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>
        {this.state.comments.map((coms, index) => (
          <Comment key={index} 
          comment={coms} 
          />
        ))}
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
