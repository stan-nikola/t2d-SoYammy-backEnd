const { loginUser } = require("../../services");

const userLoginController = async (req, res) => {
  const result = await loginUser(req.body);
  const {
    _id: id,
    name,
    email,
    token,
    avatarUrl,
    lastVisit,
    subscription,
    shoppingList,
    numberOfVisits,
    numberOfOwnRecipes,
    numberOfFavorites,
  } = result;

  return res.status(200).json({
    user: {
      id,
      name,
      email,
      avatarUrl,
      lastVisit,
      subscription,
      shoppingList,
      numberOfVisits,
      numberOfOwnRecipes,
      numberOfFavorites,
    },
    token,
  });
};

module.exports = {
  userLoginController,
};
