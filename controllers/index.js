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
  getIngredientsListController,
  getRecipeByIngredientsController,
  addOwnRecipeController,
};
