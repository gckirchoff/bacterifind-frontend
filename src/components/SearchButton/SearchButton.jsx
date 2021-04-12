import React from 'react';
import './SearchButton.scss';

const SearchButton = ({ finalCode, handleSearchClick }) => {
  return (
    <button className="search-btn" onClick={handleSearchClick}>
      <span className=" search-btn__visible">{finalCode}</span>
      <span className="search-btn__invisible">Search!</span>
    </button>
  );
};

export default SearchButton;
