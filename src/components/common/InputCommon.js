import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputCommon = ({
  name,
  placeholder,
  label,
  type,
  errors,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <label className="col-md-4 control-label">{label}</label>
      <div className="col-md-4">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user" />
          </span>
          <input
            type={type}
            name={name}
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors
            })}
            onChange={onChange}
            placeholder={placeholder}
          />
          <small className="form-text text-muted">{info}</small>
          <div className="invalid-feedback">
            <h5>{errors}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

InputCommon.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.string,
  info: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputCommon;
