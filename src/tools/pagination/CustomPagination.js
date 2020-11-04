import React from "react";
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
const CustomPagination = ({ pages, currentPage, pageItemCount, changePage }) => {

  const [prevActive, setPrevActive] = React.useState(true);

  const generatePagination = () => {
    let array = [];
    for (let i = 1; i <= pages; i++) {
      if (currentPage == i) {
        array.push(
          <PaginationItem active>
            <PaginationLink onClick={() => goToPage(i)} tag="button">
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else {
        array.push(
          <PaginationItem>
            <PaginationLink onClick={() => goToPage(i)} tag="button">
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    return array;
  };

  const goToPage = pageNumber => {
    if (pageNumber < 1) {
      setPrevActive(false);
      return;
    } else {
      if (!prevActive) setPrevActive(true);
    }
    const skip = (pageNumber - 1) * pageItemCount;
    changePage(pageNumber);
  };

  return (
    <nav>
      <Pagination>
        <PaginationItem>
          <PaginationLink
            previous
            disabled={!prevActive ? "disabled" : ""}
            tag="button"
            onClick={() => goToPage(currentPage - 1)}
          >
            قبلی
          </PaginationLink>
        </PaginationItem>
        {generatePagination()}
        <PaginationItem>
          <PaginationLink
            next
            tag="button"
            onClick={() => goToPage(currentPage + 1)}
          >
            بعدی
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
};

CustomPagination.propTypes = {
  pages: PropTypes.number,
  currentPage :PropTypes.number,
  pageItemCount :PropTypes.number,
  changePage :PropTypes.func,
}

export default CustomPagination;
