import React from "react";
import SearchInput from "./SearchInput";

const SearchFilter = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <SearchInput
        className="pa3 b--hot-pink bw2 br-pill bg-light-yellow"
        type="search"
        placeholder="search friends"
        onChange={searchChange}
        searchField={searchField}
      />
    </div>
  );
};
export default SearchFilter;
