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

module.exports = {
  getIngredientsListController,
  getRecipeByIngredientsController,
  addOwnRecipeController,
  deleteOwnRecipeController,
};
