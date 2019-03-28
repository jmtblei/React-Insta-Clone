import React from 'react';
import styled from 'styled-components';

const PostStats = styled.div`
    display: flex;
;`

const PostIcons = styled.div`
    margin: 10px;
;`

const Liked = styled.div`
    &:hover {
        color: red;
    }
;`

const Likes = styled.div`
    margin-bottom: 5px;
    font-weight: 700;
    margin-left: 10px;
;`

const LikesContainer = props => {
    return (
        <div onClick={props.upLike}>         
            <PostStats>
                <PostIcons>
                <Liked>
                    <i className="far fa-heart"></i>
                </Liked>
                </PostIcons>   
                <PostIcons>
                    <i className="far fa-comment"></i>
                </PostIcons>
            </PostStats>
            <Likes>
                {props.likes} Likes
            </Likes> 
        </div>
        // <div onClick={props.upLike}>         
        //     <div className="post-stats">
        //         <div className="post-icons liked">
        //             <i className="far fa-heart"></i>
        //         </div>   
        //         <div className="post-icons">
        //             <i className="far fa-comment"></i>
        //         </div>
        //     </div>
        //     <div className="likes weighted indented">
        //         {props.likes} Likes
        //     </div> 
        // </div>
    )
}

export default LikesContainer;