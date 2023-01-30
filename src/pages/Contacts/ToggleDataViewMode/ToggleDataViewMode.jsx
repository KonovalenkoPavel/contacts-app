import { memo, useCallback } from "react";
import PropTypes from "prop-types";

const ToggleDataViewMode = memo(({ setDataViewMode, dataViewMode }) => {
  const handleChangeDataViewMode = useCallback(
    (dataView) => {
      setDataViewMode(dataView);
      localStorage.setItem("dataViewMode", dataView);
    },
    [setDataViewMode]
  );
  return (
    <div className="btn-group">
      <a
        href="#"
        className={
          "btn btn-primary" + (dataViewMode === "table" ? " active" : "")
        }
        aria-current="page"
        onClick={() => handleChangeDataViewMode("table")}
      >
        <i className="bi bi-table"></i>
      </a>
      <a
        href="#"
        className={
          "btn btn-primary" + (dataViewMode === "table" ? "" : " active")
        }
        onClick={() => handleChangeDataViewMode("grid")}
      >
        <i className="bi bi-grid"></i>
      </a>
    </div>
  );
});

export default ToggleDataViewMode;

ToggleDataViewMode.propTypes = {
  setDataViewMode: PropTypes.func.isRequired,
  dataViewMode: PropTypes.oneOf(["table", "grid"]).isRequired,
};
