const { deleteOwnRecipe } = require("../../services");

const deleteOwnRecipeController = async (req, res, next) => {
  await deleteOwnRecipe(req);
  res.json({
    message: "recipe deleted",
  });
};

module.exports = { deleteOwnRecipeController };
