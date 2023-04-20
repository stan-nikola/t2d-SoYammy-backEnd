const { getRecipes } = require("./getRecipes");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByCategory } = require("./getRecipesByCategory");
const {getRecipesBySearchQuery} =require("./getRecipesBySearchQuery")

module.exports = {
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
  getRecipesBySearchQuery,
};
