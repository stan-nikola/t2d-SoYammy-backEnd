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
  changeUserDataController,
} = require("./userControllers/changeUserDataController");

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

  getRecipesBySearchQueryController,

  getUserFavoriteRecipesController,
  getUserRecipesController,
  addToFavoriteRecipeController,
  deleteFromFavoriteRecipeController,
} = require("./recipeControllers");

const {
  getShoppingListController,
  addProductToListController,
  removeProductFromListController,
} = require("./shoppingListControllers");

module.exports = {
  userRegistrationController,
  userLoginController,
  userLogoutController,
  getCurrentUserController,
  changeUserAvatarController,
  changeUserNameController,
  changeUserDataController,
  newsSubscribeController,
  getIngredientsListController,
  getRecipeByIngredientsController,
  addOwnRecipeController,
  deleteOwnRecipeController,
  getCategoryListController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipeByIdController,

  getRecipesBySearchQueryController,

  addToFavoriteRecipeController,
  getUserFavoriteRecipesController,
  getUserRecipesController,
  deleteFromFavoriteRecipeController,

  getShoppingListController,
  addProductToListController,
  removeProductFromListController,
};
