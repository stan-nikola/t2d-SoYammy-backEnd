const { registerUser } = require("../../services");

const userRegistrationController = async (req, res) => {
  const result = await registerUser(req.body);
  const { name, email, avatarUrl } = result;
  return res.status(201).json({
    name,
    email,
    avatarUrl,
  });
};

module.exports = {
  userRegistrationController,
};
