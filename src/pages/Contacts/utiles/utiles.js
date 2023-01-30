export const filterByFullName = ({ first, last }, fullname) =>
  first.toLowerCase().includes(fullname.toLowerCase()) ||
  last.toLowerCase().includes(fullname.toLowerCase());

export const filterByGender = (filtersGender, contact) => {
  if (filtersGender.length === 0) {
    return true;
  }
  return contact === filtersGender;
};

export const filterByNationality = (nationality, filtersNationality) => {
  if (filtersNationality.length === 0) {
    return true;
  }
  return nationality === filtersNationality;
};
