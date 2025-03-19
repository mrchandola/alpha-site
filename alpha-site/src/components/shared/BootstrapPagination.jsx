import React from "react";
import Pagination from "react-bootstrap/Pagination";

const BootstrapPagination = ({ totalPages, currentPage, onPageChange }) => {
  let items = [];

  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="pagination pagination-lg">
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {items}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default BootstrapPagination;
