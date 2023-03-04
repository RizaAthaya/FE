import React, { useState } from "react";
import './Pagination.css';

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <ul className="pagination">
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;