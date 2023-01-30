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
        {pageArr.map((p) => (
          <li
            className={"page-item" + currentPage === p ? " active" : ""}
            key={p}
            onClick={() => handlePageChange(p)}
          >
            <a className="page-link" href="#">
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
