const { getRecipes } = require("../../services");

const getRecipesController = async (req, res, next) => {
  const result = await getRecipes();
  res.status(200).json(result);
};

module.exports = getRecipesController;
