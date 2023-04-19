const { registerUser } = require("./authService/registerUser");
const { loginUser } = require("./authService/loginUser");
// const { logoutUser } = require("./authService/logoutUser");

const {
  getIngredientsList,
} = require("./ingredientServices/getIngredientsList");

const {
  getRecipeByIngredients,
} = require("./ingredientServices/getRecipeByIngredients");
const { addOwnRecipe } = require("./recipeServices/addOwnRecipe");
const { deleteOwnRecipe } = require("./recipeServices/deleteOwnRecipe");
const { getUserRecipes } = require("./recipeServices/getUserRecipies");

module.exports = {
  registerUser,
  loginUser,
  // logoutUser,
  getIngredientsList,
  getRecipeByIngredients,
  addOwnRecipe,
  deleteOwnRecipe,
  getUserRecipes,
};
