require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { LoginError } = require("../../helpers");

const SECRET_KEY = process.env.JWT_SECRET;

const loginUser = async (requestBody) => {
  const { email, password } = requestBody;

  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new LoginError("Login error. Email or password is wrong");
  }

  let { numberOfVisits, lastVisit } = user;
  const today = new Date().toLocaleDateString();
  if (today !== lastVisit) {
    numberOfVisits += 1;
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "6h" }); // ДОБАВИТЬ СРОК ДЕЙСТВИЯ ТОКЕНА: { expiresIn: "1d" }
  return await User.findByIdAndUpdate(
    user._id,
    { numberOfVisits, lastVisit: today, token },
    { new: true }
  );
};

module.exports = {
  loginUser,
};
