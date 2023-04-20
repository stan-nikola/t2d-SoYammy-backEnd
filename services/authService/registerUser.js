const { User } = require("../../models/userModel");
// const { Conflict } = require("http-errors");
const { RegistrationConflict } = require("../../helpers");
const bcrypt = require("bcrypt");
// const path = require("path");

const registerUser = async (requestBody) => {
  // const avatarUrl = path.resolve("avatar-template.png");
  const { name, email, password } = requestBody;
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const user = await User.findOne({ email });
  if (user) {
    // throw new Conflict("This user is already exist");
    throw new RegistrationConflict("This user is already exist");
  }

  return await User.create({ name, email, password: hashPassword });
};

module.exports = {
  registerUser,
};
