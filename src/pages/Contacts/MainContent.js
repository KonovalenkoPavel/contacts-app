import { ContactsTable } from "./ContactsTable";

export const MainContent = ({ contacts, dataViewMode }) => {
  if (contacts.isLoading) {
    return <div>loading...</div>;
  }
  if (contacts.isError) {
    return <div>...error</div>;
  }
  if (dataViewMode === "table") {
    return <ContactsTable contacts={contacts} />;
  }
  if (dataViewMode === "grid") {
    return <div>Grid</div>;
  }
};

export default MainContent;
