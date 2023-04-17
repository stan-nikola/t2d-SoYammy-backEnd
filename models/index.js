const { connectToDb } = require("./connection");
const { Ingredient } = require("./ingredientModel");

module.exports = {
  connectToDb,
  Ingredient,
};
