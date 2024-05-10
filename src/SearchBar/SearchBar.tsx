import { SEARCH_ICON } from "./SearchIcon";
import "./SearchBar.css";
import React from "react";

function SearchBar() {
  return (
    <div className="SearchBar">
      <img src={SEARCH_ICON} className="SearchBar-InputSearch-icon"></img>
      <input
        className="SearchBar-InputSearch"
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}

export default SearchBar;
