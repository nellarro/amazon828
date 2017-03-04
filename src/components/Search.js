import React, { Component } from 'react';
import '../styles/Search.css';

const Search = () => (
    <div id="sb-search" className="sb-search">
      <form>
        <input className="sb-search-input" placeholder="Search for item..." type="search"  name="search" id="search"></input>
        <input className="sb-search-submit" type="submit"></input>
        <span className="sb-icon-search"></span>
      </form>
    </div>
  )

export default Search
