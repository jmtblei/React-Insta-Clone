import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="top-border">
            <div className="post-container">
                <div className="thumbnail-username">
                    <div className="thumbnail">
                            <img 
                            src={props.post.thumbnailUrl}
                            alt=""
                            />
                    </div>
                    <div className="weighted indented">
                        <p>
                            {props.post.username}                      
                        </p>
                    </div>
                </div>
                <div>
                    <img 
                    src={props.post.imageUrl}
                    alt=""
                    />
                </div>
                <div className="post-stats">
                    <div className="post-icons">
                        <i className="far fa-heart"></i>
                    </div>   
                    <div className="post-icons">
                        <i className="far fa-comment"></i>
                    </div>
                </div>
                <div className="likes weighted indented">
                    {props.post.likes} Likes
                </div>
                <div>
                    <CommentSection comments={props.post.comments}/>
                </div>
                <div className="faded">
                    {props.post.timestamp}
                </div>
            </div>
        </div>
    )
}

export default Post;