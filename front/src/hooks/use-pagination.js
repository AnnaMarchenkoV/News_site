import { useEffect, useState } from 'react';

function usePaging(items = [], itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  useEffect(() => {
    if (currentPage > totalPages) { setCurrentPage(1); }
  }, [items]);

  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;
  const postsPageItems = items.slice(begin, end);

  return {
    totalPages, currentPage, setCurrentPage, pageItems: postsPageItems,
  };
}

export default usePaging;
