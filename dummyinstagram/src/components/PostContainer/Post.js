import React from 'react';
// import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import LikesContainer from './LikesContainer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TopBorder = styled.div`
  border-top: 5px solid lightgrey;
  margin: 20px auto;
  max-width: 640px;
;`

const PostContainer = styled.div`
  border: 1px solid lightgrey;
  max-width: 640px;
  margin: 20px auto;
;`

const OP = styled.div`
  display: flex;
  padding: 15px;
;`

const OPIcon = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
;`

const Weighted = styled.div`
  font-weight: 700;
;`

const Indented = styled.div`
  margin-left: 10px;
;`

const Faded = styled.div`
  color: gray;
  margin: 10px;
;`

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes
      };
    }
    upLike = () => {
      let likes = this.state.likes + 1;
      this.setState({ 
          likes 
        });
    };
    render() {
      return (
        <TopBorder>
            <PostContainer>
                <OP>
                    <OPIcon
                            src={this.props.post.thumbnailUrl}
                            alt=""
                            />
                    <Weighted>
                    <Indented>  
                        <p>
                            {this.props.post.username}                      
                        </p>
                    </Indented>    
                    </Weighted>
                </OP>
                <div>
                    <img 
                    src={this.props.post.imageUrl}
                    alt=""
                    />
                </div>
                    <LikesContainer 
                    upLike={this.upLike}
                    likes={this.state.likes}
                    />
                <div>
                    <CommentSection 
                    comments={this.props.post.comments}
                    />
                </div>
                <Faded>
                    {this.props.post.timestamp}
                </Faded>
            </PostContainer>
        </TopBorder>
        // <div className="top-border">
        //     <div className="post-container">
        //         <div className="thumbnail-username">
        //             <div className="thumbnail">
        //                     <img 
        //                     src={this.props.post.thumbnailUrl}
        //                     alt=""
        //                     />
        //             </div>
        //             <div className="weighted indented">
        //                 <p>
        //                     {this.props.post.username}                      
        //                 </p>
        //             </div>
        //         </div>
        //         <div>
        //             <img 
        //             src={this.props.post.imageUrl}
        //             alt=""
        //             />
        //         </div>
        //             <LikesContainer 
        //             upLike={this.upLike}
        //             likes={this.state.likes}
        //             />
        //         <div>
        //             <CommentSection 
        //             comments={this.props.post.comments}
        //             />
        //         </div>
        //         <div className="faded">
        //             {this.props.post.timestamp}
        //         </div>
        //     </div>
        // </div>
      )}
}

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };

export default Post;