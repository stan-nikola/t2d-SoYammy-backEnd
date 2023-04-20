const { addToFavoriteRecipe } = require("../../services");

const addToFavoriteRecipeController = async (req, res, next) => {
  await addToFavoriteRecipe(req);
  res.json({ message: "Recipe successfully added to favorites" });
};

module.exports = { addToFavoriteRecipeController };
