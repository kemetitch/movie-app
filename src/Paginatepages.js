import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchPagenation } from "./store/Actions/fetchPagenation";

const Paginatepages = () => {
  const dispatch = useDispatch();
  const fetchedPages = useSelector((state) => state.pages);

  const handlePageClick = (data) => {
    dispatch(fetchPagenation(data.selected + 1));
  };
  const pageCount = +fetchedPages;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageLinkClassName={"page-link"}
      pageClassName={"page-item"}
      pageCount={pageCount}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center p-3"}
      nextClassName={"page-item"}
      previousClassName={"page-item"}
      nextLinkClassName={"page-link"}
      previousLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Paginatepages;
