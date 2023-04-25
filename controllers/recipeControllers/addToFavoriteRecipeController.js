const { addToFavoriteRecipe } = require("../../services");

const addToFavoriteRecipeController = async (req, res, next) => {
  const result = await addToFavoriteRecipe(req);
  res.json(result);
};

module.exports = { addToFavoriteRecipeController };
