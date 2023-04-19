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

module.exports = {
  registerUser,
  loginUser,
  // logoutUser,
  getIngredientsList,
  getRecipeByIngredients,
  addOwnRecipe,
};
