import React, { useCallback } from "react";
import { useState } from "react";
import ContactFilter from "./ContactFilter/ContactFilter";
import MainContent from "./MainContent";
import ToggleDataViewMode from "./ToggleDataViewMode/ToggleDataViewMode";
import { useContacts } from "./useContacts";

const FiltersDefaultValue = {
  fullname: "",
  gender: "",
  nationality: "",
};

const filterByFullName = ({ first, last }, fullname) =>
  first.toLowerCase().includes(fullname.toLowerCase()) ||
  last.toLowerCase().includes(fullname.toLowerCase());

const filterByGender = (filtersGender, contact) => {
  if (filtersGender.length === 0) {
    return true;
  }
  return contact === filtersGender;
};

const filterByNationality = (nationality, filtersNationality) => {
  if (filtersNationality.length === 0) {
    return true;
  }
  console.log(nationality, filtersNationality);
  return nationality === filtersNationality;
};

export const Contacts = () => {
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useState(
    localStorage.getItem("dataViewMode") || "table"
  );
  const [filters, setFilters] = useState(FiltersDefaultValue);

  const updateFilter = useCallback((value, name) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  }, []);

  const filtredContacts = contacts.data
    .filter((c) => filterByFullName(c.name, filters.fullname))
    .filter((c) => filterByGender(filters.gender, c.gender))
    .filter((c) => filterByNationality(c.nat, filters.nationality));

  const clearFilters = useCallback(() => {
    setFilters(FiltersDefaultValue);
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Contacts</h1>
        <ToggleDataViewMode
          setDataViewMode={setDataViewMode}
          dataViewMode={dataViewMode}
        />
      </div>

      <ContactFilter
        clearFilters={clearFilters}
        filters={filters}
        updateFilter={updateFilter}
      />

      <MainContent contacts={filtredContacts} dataViewMode={dataViewMode} />
    </div>
  );
};
