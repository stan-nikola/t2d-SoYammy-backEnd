const { NotAuthorizedError } = require("../../helpers");
const { User } = require("../../models/userModel");

const userLogoutController = async (req, res) => {
  if (!req.user) {
    throw new NotAuthorizedError("Not authorized");
  }
  await User.findByIdAndUpdate(req.user._id, { token: null }, { new: true });
  return res.status(204).json();
};

module.exports = {
  userLogoutController,
};
