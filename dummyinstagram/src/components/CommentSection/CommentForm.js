import React from 'react';
import styled from 'styled-components';

const FormBox = styled.form`
    display: flex;
    justify-content: center;
    margin: 10px;
;`

const CommentInput = styled.input`
    text-align: center;
    padding: 20px;
    width: 100%;
    font-size: 1.25rem;
;`

const CommentForm = props => {
    return (
        <FormBox 
        onSubmit={props.addComment}
        >
            <CommentInput
            type="text"
            placeholder="Add comment..."
            value={props.inputText}
            onChange={props.commentInput}
            />
        </FormBox>
    )
};

export default CommentForm;