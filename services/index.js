const { registerUser } = require("./authService/registerUser");
const { loginUser } = require("./authService/loginUser");
// const { logoutUser } = require("./authService/logoutUser");
const { getUserRecipes } = require("./recipeServices/getUserRecipes");
const {
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
} = require("./recipeServices");

const {
  getIngredientsList,
} = require("./ingredientServices/getIngredientsList");

const {
  getRecipeByIngredients,
} = require("./ingredientServices/getRecipeByIngredients");
const { addOwnRecipe } = require("./recipeServices/addOwnRecipe");
const { deleteOwnRecipe } = require("./recipeServices/deleteOwnRecipe");

module.exports = {
  registerUser,
  loginUser,
  // logoutUser,
  getIngredientsList,
  getRecipeByIngredients,
  addOwnRecipe,
  deleteOwnRecipe,
  getUserRecipes,
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
};
