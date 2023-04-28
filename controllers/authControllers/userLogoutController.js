const { logoutUser } = require("../../services");

const userLogoutController = async (req, res) => {
  await logoutUser(req);
  return res.status(204).json();
};

module.exports = {
  userLogoutController,
};
