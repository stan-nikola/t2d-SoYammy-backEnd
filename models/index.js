const { connectToDb } = require("./connection");

const { Ingredient } = require("./ingredientModel");
const { Recipe } = require("./recipeModel");
const { User } = require("./userModel");

module.exports = {
  connectToDb,
  Ingredient,
  Recipe,
  User,
};
