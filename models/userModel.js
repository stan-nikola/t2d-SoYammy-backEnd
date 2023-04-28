const Joi = require("joi");
const { Schema, model } = require("mongoose");

const userRegistrationSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required(),
  password: Joi.string().min(6).max(16).required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
    .required(),
  password: Joi.string().min(6).max(16).required(),
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

  lastVisit: {
    type: String,
  },

  subscription: {
    type: Boolean,
    default: false,
  },

  shoppingList: [
    {
      image: {
        type: String,
      },
      ingredientId: {
        type: String,
      },
      recipeID: {
        type: String,
      },
      title: {
        type: String,
      },
      weight: {
        type: String,
      },
      _id: {
        type: String,
      },
    },
  ],

  numberOfVisits: {
    type: Number,
    default: 1,
  },

  numberOfOwnRecipes: {
    type: Number,
    default: 0,
  },

  numberOfFavorites: {
    type: Number,
    default: 0,
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
