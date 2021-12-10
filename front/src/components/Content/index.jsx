import React, { useState } from 'react';

import Posts from './Posts';
import SearchForm from './SearchForm';

import classes from './Content.module.css';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main className={classes.main}>
      <SearchForm onSubmitSearch={(value) => { setSearchTerm(value); }} />
      <Posts searchTerm={searchTerm} />
    </main>
  );
};

export default Content;
