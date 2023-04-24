const { registerUser } = require("../../services");

const userRegistrationController = async (req, res) => {
  console.log("Client IP =", req.ip);

  const result = await registerUser(req.body);
  const {
    _id: id,
    name,
    email,
    avatarUrl,
    token,
    subscription,
    shoppingList,
  } = result;
  return res.status(201).json({
    user: {
      id,
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
