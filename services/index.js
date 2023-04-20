const { registerUser } = require("./authService/registerUser");
const { loginUser } = require("./authService/loginUser");
// const { logoutUser } = require("./authService/logoutUser");
const { changeUserAvatar } = require("./userService/changeUserAvatar");
const { changeUserName } = require("./userService/changeUserName");
const {
  subscribeToNewsletter,
} = require("./SubscribeService/subscribeToNewsletter");
// const { getCurrentUser } = require("./userService/getCurrentUser");
const { getUserRecipes } = require("./recipeServices/getUserRecipes");
const {
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
  addToFavoriteRecipe,

  getUserFavoriteRecipes,
  deleteFromFavoriteRecipe,
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
  // getCurrentUser,
  changeUserAvatar,
  changeUserName,
  subscribeToNewsletter,
  getIngredientsList,
  getRecipeByIngredients,
  addOwnRecipe,
  deleteOwnRecipe,
  getUserRecipes,
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
  addToFavoriteRecipe,
  getUserFavoriteRecipes,
  deleteFromFavoriteRecipe,
};
