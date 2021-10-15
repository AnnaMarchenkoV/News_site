import { useState } from 'react';

function usePaging(news = [], ITEMS_PER_PAGE) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  function postsPageItems() {
    const begin = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = begin + ITEMS_PER_PAGE;
    return news.slice(begin, end);
  }

  return {
    totalPages, currentPage, setCurrentPage, pageItems: postsPageItems,
  };
}

export default usePaging;
