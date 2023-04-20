const { asyncWrapper, errorHandler } = require("./apiHelpers");
const categories = require("./categories");

const {
  RegistrationConflict,
  LoginError,
  NotAuthorizedError,
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
  LoginError,
  NotAuthorizedError,
  ValidationError,
  RequestError,
  NonExistingParamsError,
  ParamsAddConflictError,
  categories,
};
