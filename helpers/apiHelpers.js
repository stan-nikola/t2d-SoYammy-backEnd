const asyncWrapper = (controller) => {
  return (req, resp, next) => {
    controller(req, resp).catch(next);
  };
};

module.exports = { asyncWrapper };
