const { asyncWrapper, errorHandler } = require("./apiHelpers");
const categories = require("./categories");

const {
  RegistrationConflict,
  InvalidEmail,
  LoginError,
  NotAuthorizedError,
  FileError,
  ValidationError,
  RequestError,
  NonExistingParamsError,
  ParamsAddConflictError,
} = require("./errors");

const { createEmailBody } = require("../helpers/createEmailBody");
const { sendEmail } = require("../helpers/sendEmail");

module.exports = {
  asyncWrapper,
  errorHandler,

  createEmailBody,
  sendEmail,

  RegistrationConflict,
  InvalidEmail,
  LoginError,
  NotAuthorizedError,
  FileError,
  ValidationError,
  RequestError,
  NonExistingParamsError,
  ParamsAddConflictError,
  categories,
};
