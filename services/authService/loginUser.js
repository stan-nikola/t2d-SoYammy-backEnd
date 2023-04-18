require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/userModel");
const { LoginError } = require("../../helpers/errors");

const SECRET_KEY = process.env.JWT_SECRET;

const loginUser = async (requestBody) => {
  const { email, password } = requestBody;

  const user = await User.findOne({ email });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new LoginError("Login error. Email or password is wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY); // ДОБАВИТЬ СРОК ДЕЙСТВИЯ ТОКЕНА: { expiresIn: "1d" }
  return await User.findByIdAndUpdate(user._id, { token }, { new: true });
};

module.exports = {
  loginUser,
};
