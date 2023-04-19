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
  getIngredientsListController,
} = require("./ingredientControllers/getIngredientsListController");
const {
  getRecipeByIngredientsController,
} = require("./ingredientControllers/getRecipeByIngredientsController");
const {
  addOwnRecipeController,
} = require("./recipeControllers/addOwnRecipeController");

module.exports = {
  userRegistrationController,
  userLoginController,
  userLogoutController,
  getCurrentUserController,
  getIngredientsListController,
  getRecipeByIngredientsController,
  addOwnRecipeController,
};
