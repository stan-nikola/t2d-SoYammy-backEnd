const { popularRecipes } = require("../../services");

const popularRecipesController = async (req, res, next) => {
  const result = await popularRecipes(req);
  res.json(result);
};

module.exports = { popularRecipesController };
