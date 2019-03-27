import React from 'react';

const LikesContainer = props => {
    return (
        <div onClick={props.upLike}>         
            <div className="post-stats">
                <div className="post-icons liked">
                    <i className="far fa-heart"></i>
                </div>   
                <div className="post-icons">
                    <i className="far fa-comment"></i>
                </div>
            </div>
            <div className="likes weighted indented">
                {props.likes} Likes
            </div> 
        </div>
    )
}

export default LikesContainer;