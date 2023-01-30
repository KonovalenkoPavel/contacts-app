import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import ContactFilter from "./ContactFilter/ContactFilter";
import MainContent from "./MainContent";
import Pagination from "./Pagination/Pagination";
import ToggleDataViewMode from "./ToggleDataViewMode/ToggleDataViewMode";
import { useContacts } from "./useContacts";
import Stastic from "./ToggleDataViewMode/Statistic";
import { filtersDefaultValue } from "./defaultFilters";
import {
  filterByFullName,
  filterByGender,
  filterByNationality,
  filterSortAZ,
  filterSortZA,
} from "./utiles/utiles";

export const Contacts = () => {
  const contacts = useContacts();
  const [dataViewMode, setDataViewMode] = useState(
    localStorage.getItem("dataViewMode") || "table"
  );
  const [filters, setFilters] = useState(filtersDefaultValue);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsOnPageValue = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const updateFilter = useCallback((value, name) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  }, []);

  const filteredContacts = contacts.data
    .filter(({ name }) => filterByFullName(name, filters.fullName))
    .filter(({ gender }) => filterByGender(filters.gender, gender))
    .filter(({ nat }) => filterByNationality(nat, filters.nationality));

  const clearFilters = useCallback(() => {
    setFilters(filtersDefaultValue);
  }, []);

  let contactsAfterAZFilter;
  switch (filters.sortedByFirstName) {
    case "noSort":
      contactsAfterAZFilter = filteredContacts;
      break;
    case "AZ":
      contactsAfterAZFilter = filterSortAZ(filteredContacts);
      break;
    case "ZA":
      contactsAfterAZFilter = filterSortZA(filteredContacts);
      break;
    default:
      return <>ошибка сортировки</>;
  }

  const contactOnPage = contactsAfterAZFilter.slice(
    (currentPage - 1) * contactsOnPageValue,
    contactsOnPageValue * currentPage
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

      <ContactFilter
        clearFilters={clearFilters}
        filters={filters}
        updateFilter={updateFilter}
      />

      <MainContent
        contacts={contactOnPage}
        dataViewMode={dataViewMode}
        filters={filters}
        setFilters={setFilters}
      />
      <Stastic contactsAfterAZFilter={contactsAfterAZFilter} />

      <Pagination
        contacts={filteredContacts}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactsOnPageValue={contactsOnPageValue}
      />
    </div>
  );
};
