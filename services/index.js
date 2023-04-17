const {
  getIngredientsList,
} = require("./ingredientServices/getIngredientsList");

const {
  getRecipeByIngredients,
} = require("./ingredientServices/getRecipeByIngredients");

module.exports = { getIngredientsList, getRecipeByIngredients };
