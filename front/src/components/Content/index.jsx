import React, { useState } from 'react';

import Posts from './Posts';
import SearchForm from './SearchForm';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main className="content">
      <SearchForm value="" onSubmitSearch={(value) => { setSearchTerm(value); }} />
      <Posts props={searchTerm} />
    </main>
  );
};

export default Content;
