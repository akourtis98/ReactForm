import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListCommon = ({ name, errors, label, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <label className="col-md-4 control-label">{label}</label>
      <div className="col-md-4 ">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user" />
          </span>
          <select
            name={name}
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors
            })}
            onChange={onChange}
          >
            {selectOptions}
          </select>
          <small className="form-text text-muted">{info}</small>
          <div className="invalid-feedback">{errors} </div>
        </div>
      </div>
    </div>
  );
};

SelectListCommon.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
  info: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectListCommon;
