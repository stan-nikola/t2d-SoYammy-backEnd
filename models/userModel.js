const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },

  avatarUrl: {
    type: String,
    default: null,
  },

  subscription: {
    type: Boolean,
    default: false,
  },

  token: {
    type: String,
    default: null,
  },
});

const User = model("user", userSchema);

module.exports = {
  User,
};
