const { getRecipes } = require("./getRecipes");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByCategory } = require("./getRecipesByCategory");
const {getRecipesBySearchQuery} =require("./getRecipesBySearchQuery")
const { addToFavoriteRecipe } = require("./addToFavoriteRecipe");
const { getUserFavoriteRecipes } = require("./userFavoriteRecipes");
const { deleteFromFavoriteRecipe } = require("./deleteFromFavoriteRecipe");
const { popularRecipes } = require("./popularRecipes");


module.exports = {
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
  getRecipesBySearchQuery,
  addToFavoriteRecipe,
  getUserFavoriteRecipes,
  deleteFromFavoriteRecipe,
  popularRecipes,
};
