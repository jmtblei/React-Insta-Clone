import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post-container">
            <div className="thumbnail-username">
                <span>
                    <img 
                    src={props.post.thumbnailUrl}
                    alt=""
                    />
                    </span>
                {props.post.username}
            </div>
            <div className="post-image">
                <img 
                src={props.post.imageUrl}
                alt=""
                />
            </div>
            <div>
                {props.post.timestamp}
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                {props.post.likes}
            </div>
            <div>
                <CommentSection comments={props.post.comments}/>
            </div>
        </div>
    )
}

export default Post;