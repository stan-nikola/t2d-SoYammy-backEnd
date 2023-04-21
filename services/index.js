const { registerUser } = require("./authService/registerUser");
const { loginUser } = require("./authService/loginUser");
// const { logoutUser } = require("./authService/logoutUser");
const { changeUserAvatar } = require("./userService/changeUserAvatar");
const { changeUserName } = require("./userService/changeUserName");
const { changeUserData } = require("./userService/changeUserData");

const {
  subscribeToNewsletter,
} = require("./SubscribeService/subscribeToNewsletter");
// const { getCurrentUser } = require("./userService/getCurrentUser");
const { getUserRecipes } = require("./recipeServices/getUserRecipes");
const {
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
  getRecipesBySearchQuery,
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

const { getShoppingList, addProductToList } = require("./shoppingListService");

module.exports = {
  registerUser,
  loginUser,
  // logoutUser,
  // getCurrentUser,
  changeUserAvatar,
  changeUserName,
  changeUserData,
  subscribeToNewsletter,
  getIngredientsList,
  getRecipeByIngredients,
  addOwnRecipe,
  deleteOwnRecipe,
  getUserRecipes,
  getRecipes,
  getRecipesByCategory,
  getRecipeById,
  getRecipesBySearchQuery,
  addToFavoriteRecipe,
  getUserFavoriteRecipes,
  deleteFromFavoriteRecipe,
  getShoppingList,
  addProductToList,
};
