const { User } = require("../../models");
const { NotAuthorizedError } = require("../../helpers");

const logoutUser = async (req) => {
  if (!req.user) {
    throw new NotAuthorizedError("Not authorized");
  }
  await User.findByIdAndUpdate(req.user._id, { token: null }, { new: true });
};

module.exports = {
  logoutUser,
};
