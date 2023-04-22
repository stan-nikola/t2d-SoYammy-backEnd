// const { getCurrentUser } = require("../../services/userService/getCurrentUser");
const { NotAuthorizedError } = require("../../helpers");

const getCurrentUserController = async (req, res) => {
  if (!req.user) {
    throw new NotAuthorizedError("Not authorized");
  }
  const { name, email, avatarUrl, subscription, shoppingList } = req.user;
  return res.status(200).json({
    name,
    email,
    avatarUrl,
    subscription,
    shoppingList,
  });
};

module.exports = {
  getCurrentUserController,
};
