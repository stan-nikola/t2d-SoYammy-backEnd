const { asyncWrapper, errorHandler } = require("./apiHelpers");
const categories = require("./categories");

const {
  RegistrationConflict,
  InvalidRegistrationData,
  LoginError,
  NotAuthorizedError,
  FileError,
  ValidationError,
  RequestError,
  NonExistingParamsError,
  ParamsAddConflictError,
} = require("./errors");

const { checkPasswordValidation } = require("./passwordValidator");

const { createEmailBody } = require("../helpers/createEmailBody");
const { sendEmail } = require("../helpers/sendEmail");

module.exports = {
  asyncWrapper,
  errorHandler,
  checkPasswordValidation,
  createEmailBody,
  sendEmail,
  RegistrationConflict,
  InvalidRegistrationData,
  LoginError,
  NotAuthorizedError,
  FileError,
  ValidationError,
  RequestError,
  NonExistingParamsError,
  ParamsAddConflictError,
  categories,
};
