// const { getCurrentUser } = require("../../services/userService/getCurrentUser");
const { NotAuthorizedError } = require("../../helpers");

const getCurrentUserController = async (req, res) => {
  if (!req.user) {
    throw new NotAuthorizedError("Not authorized");
  }
  return res.status(200).json({
    name: req.user.name,
  });
};

module.exports = {
  getCurrentUserController,
};
