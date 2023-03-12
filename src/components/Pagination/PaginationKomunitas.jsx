import React from 'react';
import "../../css/PaginationKomunitas.css";

const PaginationKomunitas = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='paginationKomunitas'>
        {pages.map((page, index) => {
            return (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page == currentPage ? "active" : ""}>
                    {page}
                </button>
            );
        })}
        </div>
    );
};

export default PaginationKomunitas;