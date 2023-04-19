const { connectToDb } = require("./connection");

const { Ingredient } = require("./ingredientModel");
const { Recipe } = require("./recipeModel");

module.exports = {
  connectToDb,
  Ingredient,
  Recipe,
};
