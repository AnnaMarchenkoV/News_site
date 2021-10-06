import React from 'react';

import classes from './Search.module.css';

const Search = () => {
  const toSearch = ((event) => {
    const searchValue = event.currentTarget.value;
    console.log(searchValue);
  }
  );
  return (
    <div className={classes.search}>
      <input placeholder="Search..." type="search" onChange={toSearch} className={classes.search__request} name="search" />
    </div>
  );
};

export default Search;
