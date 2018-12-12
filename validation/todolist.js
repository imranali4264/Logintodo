const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateTodoListInput(data) {
  let errors = {};

  data.todo = !isEmpty(data.todo) ? data.todo : "";

  if (Validator.isEmpty(data.todo)) {
    errors.todo = "Todo must be required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
