const { Ingredient } = require("../../models");

const getIngredientsList = async () => {
  return await Ingredient.find({});
};

module.exports = { getIngredientsList };
