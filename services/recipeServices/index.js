const { getRecipes } = require("./getRecipes");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByCategory } = require("./getRecipesByCategory");
const { addToFavoriteRecipe } = require("./addToFavoriteRecipe");
const { getUserFavoriteRecipes } = require("./userFavoriteRecipes");
const { deleteFromFavoriteRecipe } = require("./deleteFromFavoriteRecipe");

module.exports = {
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
  addToFavoriteRecipe,
  getUserFavoriteRecipes,
  deleteFromFavoriteRecipe,
};
