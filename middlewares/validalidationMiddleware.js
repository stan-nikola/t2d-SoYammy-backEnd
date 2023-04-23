const { ValidationError } = require("../helpers");

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      const { message } = validationResult.error;

      next(new ValidationError(message));
    }
    next();
  };
};

module.exports = { validationMiddleware };
