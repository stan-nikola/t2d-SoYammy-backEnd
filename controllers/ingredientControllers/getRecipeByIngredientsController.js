const { getRecipeByIngredients } = require("../../services");

const getRecipeByIngredientsController = async (req, res, next) => {
  const finnedRecipes = await getRecipeByIngredients(req);
  res.json(finnedRecipes);
};

module.exports = { getRecipeByIngredientsController };
