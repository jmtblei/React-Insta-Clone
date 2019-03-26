import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
            <span className="weighted">{props.comment.username}</span>
            <span className="indented">{props.comment.text}</span>
        </div>
    )
};

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment;