import React from 'react';
// import './SearchBar.css';
import cameralogo from '../../assets/igcameralogo.png';
import iglogo from '../../assets/iglogo.png';
import styled from 'styled-components';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 20px ;
    border-bottom: 1px solid lightgrey;
    max-width: 640px;
    margin: 0 auto;
`;

const MenuWrapper = styled.div`
    display: flex;
;`

const LogoWrapperC = styled.img`
    height: 30px;
    width: 30px;
;`

const LogoWrapper = styled.img`
    height: 30px;
    width: 100px;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid black;
;`

const MenuIcons = styled.div`
    margin-left: 20px;
;`

const SearchBar = props => {
    return (
        <Wrapper>
            <MenuWrapper>
                <LogoWrapperC src={cameralogo}/>
                <LogoWrapper src={iglogo}/>
            </MenuWrapper>
            <MenuWrapper>
                <input
                type="text"
                placeholder="Search"
                onKeyDown={props.searchPosts}
                />
            </MenuWrapper>
            <MenuWrapper>
                <MenuIcons>
                    <i className="far fa-compass"></i>
                </MenuIcons>
                <MenuIcons>
                    <i className="far fa-heart"></i>
                </MenuIcons>
                <MenuIcons>
                    <i className="far fa-user"></i>
                </MenuIcons>
            </MenuWrapper>
        </Wrapper>
        
    )
}

// const SearchBar = props => {
//     return (
//         <div className="search-bar-wrapper">
//             <div className="insta-icon">
//                 <span><i className="fab fa-instagram"></i></span>
//                 <div className="header">
//                     Instagram
//                 </div>
//             </div>
//             <div>
//                 <input
//                 type="text"
//                 placeholder="Search"
//                 onKeyDown={props.searchPosts}
//                 />
//             </div>
//             <div className="icon-wrapper">
//                 <div className="icon">
//                     <i className="far fa-compass"></i>
//                 </div>
//                 <div className="icon">
//                     <i className="far fa-heart"></i>
//                 </div>
//                 <div className="icon">
//                     <i className="far fa-user"></i>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

export default SearchBar;