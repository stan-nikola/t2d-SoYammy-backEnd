require("dotenv").config();
const { User } = require("../../models");
// const { Conflict } = require("http-errors");
const {
  RegistrationConflict,
  InvalidRegistrationData,
  // checkPasswordValidation,
} = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const path = require("path");
const SECRET_KEY = process.env.JWT_SECRET;

const registerUser = async (requestBody) => {
  // const avatarUrl = path.resolve("avatar-template.png");
  const { name, email, password } = requestBody;
  const today = new Date().toLocaleDateString();

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
    throw new InvalidRegistrationData(
      "Invalid email address. Cyrillic symbols not allowed"
    );
  }

  // const checkPasswordResult = checkPasswordValidation(password);
  // if (checkPasswordResult) {
  //   throw new InvalidRegistrationData(`${checkPasswordResult}`);
  // }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const user = await User.findOne({ email });
  if (user) {
    throw new RegistrationConflict("This user is already exist");
  }

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    lastVisit: today,
  });

  const payload = { id: newUser._id };
  const token = jwt.sign(payload, SECRET_KEY); // ДОБАВИТЬ СРОК ДЕЙСТВИЯ ТОКЕНА: { expiresIn: "1d" }

  const newUserWithToken = await User.findByIdAndUpdate(
    newUser._id,
    { token },
    { new: true }
  );
  return newUserWithToken;
};

module.exports = {
  registerUser,
};
