import React from 'react';
import 'SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrapper">
            <div>
                <p>
                    <span><i class="fab fa-instagram"></i></span>
                    Instagram
                </p>
            </div>
            <div>
                <input
                type="text"
                placeholder="Search"
                />
            </div>
            <div>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
        
    )
}

export default SearchBar;