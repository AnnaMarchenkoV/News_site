import React from 'react';

import classes from './Search.module.css';

const Search = () => (
  <div className={classes.search}>
    <input
      type="search"
      className={classes.search__request}
      name="search"
      aria-label="Search..."
    />
    <button type="button">Search</button>
  </div>
);

export default Search;
