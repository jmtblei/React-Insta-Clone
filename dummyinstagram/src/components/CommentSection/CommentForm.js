import React from 'react';

const CommentForm = props => {
    return (
        <form 
        onSubmit={props.addComment}
        className="form-box">
            <input
            className="input-text"
            type="text"
            placeholder="Add comment..."
            value={props.inputText}
            onChange={props.commentHandler}
            />
        </form>
    )
};

export default CommentForm;