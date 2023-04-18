const { addOwnRecipe } = require("../../services");

const addOwnRecipeController = async (req, res, next) => {
  console.log(req);
  const result = await addOwnRecipe(req.body);

  res.json(result);
};

module.exports = { addOwnRecipeController };
