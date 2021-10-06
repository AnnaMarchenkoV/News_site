import React from 'react';

import FetchedPost from './FetchedPost/index';
import SearchForm from './SearchForm/index';

import './content.css';

const Content = () => (
  <main className="content">
    <SearchForm />
    <FetchedPost />
  </main>
);

export default Content;
