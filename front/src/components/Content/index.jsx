import React, { useState } from 'react';

import Posts from './Posts';
import SearchForm from './SearchForm';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <SearchForm onSubmitSearch={(value) => { setSearchTerm(value); }} />
      <Posts searchTerm={searchTerm} />
    </main>
  );
};

export default Content;
