const { registerUser } = require("../../services");

const userRegistrationController = async (req, res) => {
  const result = await registerUser(req.body);
  const { name, email, avatarUrl, token, subscription, shoppingList } = result;
  return res.status(201).json({
    user: {
      name,
      email,
      avatarUrl,
      subscription,
      shoppingList,
    },
    token,
  });
};

module.exports = {
  userRegistrationController,
};
