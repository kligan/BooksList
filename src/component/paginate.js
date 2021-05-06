import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginate=(props)=> {
    // Props destructuring
    const {pageCount,handleClick} = props;

    return (
        <div>
            {/*Pagination interface with all the page numbers and navigational buttons*/}
            <ReactPaginate
                previousLabel={"Back"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                onPageChange={handleClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                />
        </div>
    );
}

export default Paginate;
