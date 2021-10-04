import React from 'react';

import Post from './Post/index';
import Search from './SearchForm/index';

import classes from './Content.module.css';

const Content = () => (
  <main className={classes.content}>
    <Search />
    <Post />
  </main>
);

export default Content;
