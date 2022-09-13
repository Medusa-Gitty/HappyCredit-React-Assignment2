import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchedData }) => {
  function handleInput(e) {
    searchedData(e.target.value);
  }

  return (
    <div>
      <input
        onChange={handleInput}
        type="text"
        name="product-search"
        id="product-search"
        placeholder="Search by title"
      />
    </div>
  );
};

export default SearchBar;
