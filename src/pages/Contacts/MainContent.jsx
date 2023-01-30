import { ContactsTable } from "./ContactsTable";

const MainContent = (props) => {
  const { contacts, isLoading, isError, dataViewMode, filters, setFilters } =
    props;

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>...error</div>;
  }

  if (dataViewMode === "table") {
    return (
      <ContactsTable
        contacts={contacts}
        filters={filters}
        setFilters={setFilters}
      />
    );
  }

  return <div>Grid</div>;
};

export default MainContent;
