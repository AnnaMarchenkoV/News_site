import React from 'react';

import FetchedPost from './FetchedPost/index.jsx';
import SearchForm from './SearchForm/index.jsx';

import classes from './Content.module.css';

const Content = () => (
  <main className={classes.content}>
    <SearchForm />
    <FetchedPost />
  </main>
);

export default Content;
