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
    setFilters(filtersDefaultValue);
  }, []);

  let contactsAfterAZFilter;
  switch (filters.sortedByFirstName) {
    case "noSort":
      contactsAfterAZFilter = filtredContacts;
      break;
    case "AZ":
      contactsAfterAZFilter = filtredContacts.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      break;
    case "ZA":
      contactsAfterAZFilter = filtredContacts.sort((a, b) =>
        a.name.first < b.name.first ? 1 : -1
      );
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
        contacts={filtredContacts}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactsOnPageValue={contactsOnPageValue}
      />
    </div>
  );
};
