const { registerUser } = require("../../services");

const userRegistrationController = async (req, res) => {
  // console.log("Client IP =", req.ip);
  const result = await registerUser(req.body);
  const {
    _id: id,
    name,
    email,
    avatarUrl,
    lastVisit,
    token,
    subscription,
    shoppingList,
    numberOfVisits,
    numberOfOwnRecipes,
    numberOfFavorites,
  } = result;
  return res.status(201).json({
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
  userRegistrationController,
};
