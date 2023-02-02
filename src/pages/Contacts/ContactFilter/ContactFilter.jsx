import PropTypes from "prop-types";
import { memo } from "react";
import { gender } from "../../../constantce/gender";
import { nationality } from "../../../constantce/nationality";

const ContactFilter = ({ filters, updateFilter, clearFilters }) => {
  const handleChangeFilter = (event, name) => {
    updateFilter(event.target.value, name);
  };

  return (
    <div className="input-group d-flex">
      <div className="d-flex flex-row flex-grow-1">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search by full name"
            aria-describedby="button-addon-1"
            value={filters.fullName}
            onChange={(event) => handleChangeFilter(event, "fullName")}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon-1"
            aria-label="search"
          >
            <i className="bi bi-search" title="search"></i>
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
          {Object.entries(gender).map(([key, value]) => {
            return (
              <option key={key} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>

      <div className="input-group form-control">
        <select
          className="form-select"
          id="inputGroupSelect02"
          onChange={(event) => handleChangeFilter(event, "nationality")}
        >
          <option value="">Nationality</option>
          {Object.entries(nationality).map(([key, value]) => {
            return (
              <option key={key} value={key}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-group form-control d-flex justify-content-end">
        <button
          className="btn btn-light"
          aria-label="clear"
          type="button"
          onClick={clearFilters}
        >
          <i className="bi bi-x" title="clear"></i>
          clear
        </button>
      </div>
    </div>
  );
};

export default memo(ContactFilter);

ContactFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};
