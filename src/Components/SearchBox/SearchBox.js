import React from 'react';
import './SearchBox.css'

const SearchBox = ({placeholder, setKeyword}) => (
    <div className="search-box">
        Search <input type="search" placeholder={placeholder} onChange={setKeyword}/>
    </div>
)

export default SearchBox;
