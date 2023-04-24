const Joi = require("joi");
const { Schema, model } = require("mongoose");

const userRegistrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required(),
  password: Joi.string().min(5).max(20).required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required(),
  password: Joi.string().min(5).max(20).alphanum().required(),
});

// const userSubsriptionSchema = Joi.object({
//   email: Joi.string()
//     .email({ minDomainSegments: 2, tlds: { allow: true } })
//     .required(),
// });

// q
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
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
    default:
      "https://res.cloudinary.com/dwqka6xc7/image/upload/v1682009445/soYummyT2D/avatars/tbe6lqtuz7ki8dcxpqgh.png",
  },

  subscription: {
    type: Boolean,
    default: false,
  },

  shoppingList: {
    type: Object,
    default: {},
  },

  token: {
    type: String,
    default: null,
  },
});

const User = model("user", userSchema);

module.exports = {
  User,
  userRegistrationSchema,
  userLoginSchema,
  // userSubsriptionSchema,
};
