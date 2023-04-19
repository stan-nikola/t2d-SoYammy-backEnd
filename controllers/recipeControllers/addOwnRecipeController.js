const { addOwnRecipe } = require("../../services");

const addOwnRecipeController = async (req, res, next) => {
  const result = await addOwnRecipe(req);
  res.status(201).json(result);
};

module.exports = { addOwnRecipeController };
