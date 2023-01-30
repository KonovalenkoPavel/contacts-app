const filterByFullName = ({ first, last }, fullName) =>
  first.toLowerCase().includes(fullName.toLowerCase()) ||
  last.toLowerCase().includes(fullName.toLowerCase());

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
  return nationality === filtersNationality;
};

const filterSortAZ = (contacts) => {
  return contacts.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
};

const filterSortZA = (contacts) => {
  return contacts.sort((a, b) => (a.name.first < b.name.first ? 1 : -1));
};

export {
  filterByFullName,
  filterByGender,
  filterByNationality,
  filterSortAZ,
  filterSortZA,
};
