const { getRecipes } = require("./getRecipes");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByCategory } = require("./getRecipesByCategory");

module.exports = {
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
};
