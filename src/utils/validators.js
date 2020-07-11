// import { CookieService } from "Utils/cookieService";
// const languageCode = CookieService.getJSON("LANG");

export const nameValidator = (value, languageCode) => {
  const nameRegex = /^[A-Za-z]+$/;
  let error = "";

  if (!value && languageCode === "en")
    error = "Please fill in these details to continue";
  else if (!value && languageCode === "ar")
    error = "يرجى ملء هذه التفاصيل للمتابعة";
  else if (!value.match(nameRegex))
    error = "Special characters and numbers not allowed";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};

export const emailValidator = (value, languageCode) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let error = "";

  if (!value && languageCode === "en")
    error = "Please fill in these details to continue";
  else if (!value && languageCode === "ar")
    error = "يرجى ملء هذه التفاصيل للمتابعة";
  else if (!emailRegex.test(value) && languageCode === "en")
    error = "Please provide a valid email address";
  else if (!emailRegex.test(value) && languageCode === "ar")
    error = "يرجى تقديم عنوان بريد إلكتروني صالح";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};

export const passwordValidator = (password, confirmPassword, languageCode) => {
  let error = "";

  if (!confirmPassword && languageCode === "en")
    error = "Please fill in these details to continue";
  else if (!confirmPassword && languageCode === "ar")
    error = "يرجى ملء هذه التفاصيل للمتابعة";
  else if (password !== confirmPassword && languageCode === "en")
    error = "Password did not match";
  else if (password !== confirmPassword && languageCode === "ar")
    error = "لم لا تتطابق مع كلمة المرور";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};

export const isEmptyValidator = (value, languageCode) => {
  if (!value && languageCode === "en")
    return {
      result: false,
      error: "Please fill in these details to continue",
    };
  else if (!value && languageCode === "ar")
    return {
      result: false,
      error: "يرجى ملء هذه التفاصيل للمتابعة",
    };

  return { result: true };
};

export const isPhoneNumber = (value, languageCode) => {
  let error = "";
  const numberRegex = /^((0*|\+)965[569]\d{7})$/;

  if (!value && languageCode === "en")
    error = "Please fill in these details to continue";
  else if (!value && languageCode === "ar")
    error = "يرجى ملء هذه التفاصيل للمتابعة";
  else if (!numberRegex.test(value) && languageCode === "en")
    error = "Please enter a valid phone number";
  else if (!numberRegex.test(value) && languageCode === "ar")
    error = "يرجى إدخال رقم هاتف صالح";

  return error
    ? {
        result: false,
        error,
      }
    : { result: true };
};
