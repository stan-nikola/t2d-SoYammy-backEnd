const { SoYummyAppError } = require("./errors");

const asyncWrapper = (controller) => {
  return (req, resp, next) => {
    controller(req, resp).catch(next);
  };
};

const errorHandler = (err, req, res, next) => {
  console.log("ERROR SO", err instanceof SoYummyAppError);
  if (err instanceof SoYummyAppError) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
};

module.exports = { asyncWrapper, errorHandler };
