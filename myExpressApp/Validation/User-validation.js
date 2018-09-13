const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  Object.keys(data).map(key => {
    data[key] = !isEmpty(data[key]) ? data[key] : "";
  });

  Object.keys(data).map(key => {
    if (validator.isEmpty(data[key])) {
      errors[key] = key + " field is required";
    }
  });

  if (!validator.isLength(data.username, { min: 2, max: 15 })) {
    errors.username = "username must be between 2 and 15 characters";
  }
  if (!data.username.match(/^[^\W]+$/)) {
    //
    errors.username =
      "Username cannot contain symbols or spaces except for '_'";
  }
  if (validator.isEmpty(data.username)) {
    errors.username = "username field is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (!data.password.match(/^[^\W_]+$/)) {
    errors.password = "Password cannot contain symbols or spaces";
  }
  if (!data.password2.match(/^[^\W_]+$/)) {
    errors.password2 = "Password cannot contain symbols or spaces";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords should match";
  }
  if (!validator.isLength(data.password, { min: 3, max: 15 })) {
    errors.password = "Password must be atleast 3 characters and max 15";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
