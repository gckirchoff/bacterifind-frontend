import React from 'react';
import './SearchButton.scss';

const SearchButton = ({ finalCode, handleSearchClick }) => {
  return (
    <button
      data-testid="search-button"
      className="search-btn"
      onClick={handleSearchClick}
    >
      {/* <span className=" search-btn__visible">{finalCode}</span>
      <span className="search-btn__invisible">Search</span> */}
      Search {finalCode}
    </button>
  );
};

export default SearchButton;
