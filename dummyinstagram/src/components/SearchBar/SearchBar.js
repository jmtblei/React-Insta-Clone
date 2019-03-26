import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrapper">
            <div className="insta-icon">
                <span><i className="fab fa-instagram"></i></span>
                <div className="header">
                    Instagram
                </div>
            </div>
            <div>
                <input
                type="text"
                placeholder="Search"
                onKeyDown={props.searchPosts}
                />
            </div>
            <div className="icon-wrapper">
                <div className="icon">
                    <i className="far fa-compass"></i>
                </div>
                <div className="icon">
                    <i className="far fa-heart"></i>
                </div>
                <div className="icon">
                    <i className="far fa-user"></i>
                </div>
            </div>
        </div>
        
    )
}

export default SearchBar;