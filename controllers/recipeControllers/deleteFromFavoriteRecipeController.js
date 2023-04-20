const { deleteFromFavoriteRecipe } = require("../../services");

const deleteFromFavoriteRecipeController = async (req, res, next) => {
  await deleteFromFavoriteRecipe(req);
  res.json({ message: "Recipe successfully deleted from favorites" });
};

module.exports = { deleteFromFavoriteRecipeController };
