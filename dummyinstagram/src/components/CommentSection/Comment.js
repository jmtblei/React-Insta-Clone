import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
            <span>{props.comment.username}</span>
            <span>{props.comment.text}</span>
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