import React from "react";
import "../App.css";

import { FaAngleRight } from "react-icons/fa";
function Search({ clickHandler, inputHandler }) {
  return (
    <div className="search-container">
      <h1 className="title">Ip Address Tracker</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for IP address or domain"
          onChange={inputHandler}
        ></input>
        <span className="search-icon">
          <FaAngleRight color="white" />
        </span>
      </div>
    </div>
  );
}

export default Search;
