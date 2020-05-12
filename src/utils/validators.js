import isEmpty from "lodash/isEmpty";

export const nameValidator = (value) => {
  const nameRegex = /^[A-Za-z]+$/;
  let error = "";

  if (!value) error = "Please fill in these details to continue";
  else if (!value.match(nameRegex))
    error = "Special characters and numbers not allowed";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};

export const emailValidator = (value) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let error = "";

  if (!value) error = "Please fill in these details to continue";
  else if (!emailRegex.test(value))
    error = "Please provide a valid email address";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};

export const passwordValidator = (password, confirmPassword) => {
  let error = "";

  if (!confirmPassword) error = "Please fill in these details to continue";
  else if (password !== confirmPassword) error = "Password did not match";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};

export const isEmptyValidator = (value) => {
  if (!value)
    return {
      result: false,
      error: "Please fill in these details to continue",
    };

  return { result: true };
};

export const isPhoneNumber = (value) => {
  let error = "";
  const numberRegex = /^\d+$/;

  if (!value) error = "Please fill in these details to continue";
  else if (value.length !== 10 || !numberRegex.test(value))
    error = "Please enter a valid phone number";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};
