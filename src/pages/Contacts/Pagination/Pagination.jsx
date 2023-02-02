import classNames from "classnames";

const Pagination = (props) => {
  const { setCurrentPage, currentPage, itemsPerPage, totalItems } = props;
  const pageCount = Math.ceil(totalItems / itemsPerPage) || 0;

  // let pageArr = [];
  // for (let i = 1; i <= pageCount; i++) {
  //   pageArr.push(i);
  // }
  const pageArr = [...Array(pageCount)].map((_, index) => index + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageArr.map((page) => (
          <li
            className={classNames("page-item", {
              active: currentPage === page,
            })}
            key={page}
            onClick={() => handlePageChange(page)}
          >
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
