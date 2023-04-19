const { addOwnRecipe } = require("../../services");

const addOwnRecipeController = async (req, res, next) => {
  const result = await addOwnRecipe(req);
  res.json(result);
};

module.exports = { addOwnRecipeController };
