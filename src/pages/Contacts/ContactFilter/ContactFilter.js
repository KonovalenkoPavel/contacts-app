import PropTypes from "prop-types";
import { memo } from "react";
import { Nationality } from "../../../constantce/nationality";

const ContactFilter = memo(({ filters, updateFilter, clearFilters }) => {
  const handleChangeFilter = (event, name) => {
    updateFilter(event.target.value, name);
  };

  return (
    <div className="input-group d-flex">
      <div className="d-flex flex-row flex-grow-1">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by full name"
            aria-describedby="button-addon1"
            value={filters.fullname}
            onChange={(event) => handleChangeFilter(event, "fullname")}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      <div className="input-group form-control">
        <select
          className="form-select"
          id="inputGroupSelect01"
          onChange={(event) => handleChangeFilter(event, "gender")}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="input-group form-control">
        <select
          className="form-select"
          id="inputGroupSelect02"
          onChange={(event) => handleChangeFilter(event, "nationality")}
        >
          <option value="">Nationality</option>
          {Object.entries(Nationality).map(([key, value]) => {
            return (
              <option key={key} value={key}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-group form-control d-flex justify-content-end">
        <button type="button" className="btn btn-light" onClick={clearFilters}>
          <i className="bi bi-x"></i>
          clear
        </button>
      </div>
    </div>
  );
});

export default ContactFilter;

ContactFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};
