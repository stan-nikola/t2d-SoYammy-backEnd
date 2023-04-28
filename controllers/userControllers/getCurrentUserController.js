const { NotAuthorizedError } = require("../../helpers");

const getCurrentUserController = async (req, res) => {
  if (!req.user) {
    throw new NotAuthorizedError("Not authorized");
  }
  const {
    _id: id,
    name,
    email,
    avatarUrl,
    subscription,
    shoppingList,
    numberOfVisits,
    numberOfOwnRecipes,
    numberOfFavorites,
  } = req.user;
  return res.status(200).json({
    id,
    name,
    email,
    avatarUrl,
    subscription,
    shoppingList,
    numberOfVisits,
    numberOfOwnRecipes,
    numberOfFavorites,
  });
};

module.exports = {
  getCurrentUserController,
};
