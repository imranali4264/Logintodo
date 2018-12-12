const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email must be required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password must be required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
