import React from 'react';
// import './Comment.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentWrapper = styled.div`
    margin: 5px 10px 0;
;`

const Weighted = styled.span`
  font-weight: 700;
;`

const Indented = styled.span`
  margin-left: 10px;
;`

const Comment = props => {
    return (
        <CommentWrapper>
            <Weighted>{props.comment.username}</Weighted>
            <Indented>{props.comment.text}</Indented>
        </CommentWrapper>
    )
};

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment;