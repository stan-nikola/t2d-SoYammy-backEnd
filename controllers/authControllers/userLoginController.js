const { loginUser } = require("../../services");

const userLoginController = async (req, res) => {
  const result = await loginUser(req.body);
  const { name, email, token, avatarUrl, subscription, shoppingList } = result;
  // console.log("token=", token);
  // console.log("result=", result);
  return res.status(200).json({
    name,
    email,
    token: token,
    avatarUrl,
    subscription,
    shoppingList,
  });
};

module.exports = {
  userLoginController,
};
