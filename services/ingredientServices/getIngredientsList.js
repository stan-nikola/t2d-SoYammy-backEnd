const { Ingredient } = require("../../models");

const getIngredientsList = async () => {
  const ingredients = await Ingredient.find({});

  return ingredients;
};

module.exports = { getIngredientsList };
