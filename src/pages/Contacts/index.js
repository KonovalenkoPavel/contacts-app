import { useState } from "react";
import { ContactsTable } from "./ContactsTable";
import ToggleDataViewMode from "./ToggleDataViewMode/ToggleDataViewMode";
import { useContacts } from "./useContacts";

export const Contacts = () => {
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useState(
    localStorage.getItem("dataViewMode") || "table"
  );

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Contacts</h1>
        <ToggleDataViewMode
          setDataViewMode={setDataViewMode}
          dataViewMode={dataViewMode}
        />
      </div>
      {() => {
        if (contacts.isLoading) {
          return <div>loading...</div>;
        }
        if (contacts.isError) {
          return <div>...error</div>;
        }
        if (dataViewMode === "table") {
          return <ContactsTable contacts={contacts.data} />;
        }
        if (dataViewMode === "grid") {
          return <div>Grid</div>;
        }
      }}
    </div>
  );
};
