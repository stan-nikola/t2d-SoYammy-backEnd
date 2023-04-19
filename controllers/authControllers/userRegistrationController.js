const { registerUser } = require("../../services");

const userRegistrationController = async (req, res) => {
  const result = await registerUser(req.body);
  const { name, email } = result;
  return res.status(201).json({
    name: name,
    email: email,
  });
};

module.exports = {
  userRegistrationController,
};
