import classNames from "classnames";

const Pagination = ({
  contacts,
  setCurrentPage,
  currentPage,
  contactsOnPageValue,
}) => {
  const pageCount = Math.ceil(contacts.length / contactsOnPageValue);

  let pageArr = [];
  for (let i = 1; i <= pageCount; i++) {
    pageArr.push(i);
  }

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
