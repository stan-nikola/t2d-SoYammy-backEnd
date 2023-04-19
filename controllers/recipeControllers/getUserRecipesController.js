const { getUserRecipes } = require("../../services");

const getUserRecipesController = async (req, res, next) => {
  const result = await getUserRecipes(req);

  res.json(result);
};

module.exports = { getUserRecipesController };
