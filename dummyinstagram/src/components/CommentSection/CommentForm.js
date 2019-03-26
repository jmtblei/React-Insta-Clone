import React from 'react';

const CommentForm = props => {
    return (
        <form onSubmit={props.addComment}>
            <input
            type="text"
            placeholder="Add comment..."
            value={props.inputText}
            onChange={props.commentHandler}
            />
        </form>
    )
};

export default CommentForm;