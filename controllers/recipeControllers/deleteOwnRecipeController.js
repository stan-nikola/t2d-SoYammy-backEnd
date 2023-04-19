const { deleteOwnRecipe } = require("../../services");

const deleteOwnRecipeController = async (req, res, next) => {
  const result = await deleteOwnRecipe(req.params);
  res.json(result);
};

module.exports = { deleteOwnRecipeController };
