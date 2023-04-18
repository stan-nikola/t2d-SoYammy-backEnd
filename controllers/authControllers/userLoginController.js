const { loginUser } = require("../../services/authService/loginUser");

const userLoginController = async (req, res) => {
  const result = await loginUser(req.body);
  const { token } = result;
  console.log("result=", result);
  return res.status(200).json({
    token: token,
  });
};

module.exports = {
  userLoginController,
};
