const {
  userRegistrationController,
} = require("./authControllers/userRegistrationController");

const {
  userLoginController,
} = require("./authControllers/userLoginController");

const {
  userLogoutController,
} = require("./authControllers/userLogoutController");

const {
  getCurrentUserController,
} = require("./userControllers/getCurrentUserController");

const {
  changeUserAvatarController,
} = require("./userControllers/changeUserAvatarController");

const {
  changeUserNameController,
} = require("./userControllers/changeUserNameController");

const {
  newsSubscribeController,
} = require("./SubscribeController/newsSubscribeController");

const {
  getIngredientsListController,
} = require("./ingredientControllers/getIngredientsListController");
const {
  getRecipeByIngredientsController,
} = require("./ingredientControllers/getRecipeByIngredientsController");
const {
  addOwnRecipeController,
} = require("./recipeControllers/addOwnRecipeController");
const {
  deleteOwnRecipeController,
} = require("./recipeControllers/deleteOwnRecipeController");

const {
  getCategoryListController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipeByIdController,

  getUserFavoriteRecipesController,
  getUserRecipesController,
  addToFavoriteRecipeController,
  deleteFromFavoriteRecipeController,
} = require("./recipeControllers");

module.exports = {
  userRegistrationController,
  userLoginController,
  userLogoutController,
  getCurrentUserController,
  changeUserAvatarController,
  changeUserNameController,
  newsSubscribeController,
  getIngredientsListController,
  getRecipeByIngredientsController,
  addOwnRecipeController,
  deleteOwnRecipeController,
  getCategoryListController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipeByIdController,
  addToFavoriteRecipeController,
  getUserFavoriteRecipesController,
  getUserRecipesController,
  deleteFromFavoriteRecipeController,
};
