const {  deleteFromFavoriteRecipe } = require("../../services");

const deleteFromFavoriteRecipeController = async (req, res, next) => {
  await deleteFromFavoriteRecipe(req);
  res.json({ message: "Recipe successfully added to favorites" });
};

module.exports = { deleteFromFavoriteRecipeController };
