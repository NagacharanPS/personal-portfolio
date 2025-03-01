import React, { useState } from "react";
import { Search, X } from "lucide-react";
import "../css/searchBar.css";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchValue("");
    onSearch("");
  };

  return (
    <div className="search-bar-container">
      <Search className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      {searchValue && <X className="clear-search-icon" onClick={clearSearch} />}
    </div>
  );
}

export default SearchBar;
