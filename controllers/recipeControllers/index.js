const { getCategoryListController } = require("./getCategoryListController");
const { getRecipesController } = require("./getRecipesController");
const {
  getRecipesByCategoryController,
} = require("./getRecipesByCategoryController");
const { getRecipeByIdController } = require("./getRecipeByIdController");
const {
  getRecipesBySearchQueryController,
} = require("./getRecipesBySearchQueryController");

const {
  addToFavoriteRecipeController,
} = require("./addToFavoriteRecipeController");

const { getUserRecipesController } = require("./getUserRecipesController");
const {
  getUserFavoriteRecipesController,
} = require("./getUserFavoriteRecipesController");
const {
  deleteFromFavoriteRecipeController,
} = require("./deleteFromFavoriteRecipeController");

module.exports = {
  getCategoryListController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipeByIdController,
  getRecipesBySearchQueryController,
  addToFavoriteRecipeController,
  getUserFavoriteRecipesController,
  getUserRecipesController,
  deleteFromFavoriteRecipeController,
};
