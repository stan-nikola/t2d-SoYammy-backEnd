require("dotenv").config();
const { User } = require("../../models/userModel");
// const { Conflict } = require("http-errors");
const { RegistrationConflict } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const path = require("path");
const SECRET_KEY = process.env.JWT_SECRET;

const registerUser = async (requestBody) => {
  // const avatarUrl = path.resolve("avatar-template.png");
  const { name, email, password } = requestBody;
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const user = await User.findOne({ email });
  if (user) {
    // throw new Conflict("This user is already exist");
    throw new RegistrationConflict("This user is already exist");
  }

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });

  console.log("newUser =", newUser);

  const payload = { id: newUser._id };
  const token = jwt.sign(payload, SECRET_KEY); // ДОБАВИТЬ СРОК ДЕЙСТВИЯ ТОКЕНА: { expiresIn: "1d" }
  console.log("token =", token);

  console.log("newUser._id = ", newUser._id);

  const newUserWithToken = await User.findByIdAndUpdate(
    newUser._id,
    { token },
    { new: true }
  );
  console.log("newUserWithToken =", newUserWithToken);
  return newUserWithToken;
};

module.exports = {
  registerUser,
};
