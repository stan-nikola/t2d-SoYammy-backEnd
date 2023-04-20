const { getUserFavoriteRecipes } = require("../../services");

const getUserFavoriteRecipesController = async (req, res) => {
  const result = await getUserFavoriteRecipes(req);

  res.json(result);
};

module.exports = { getUserFavoriteRecipesController };
