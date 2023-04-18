const { getIngredientsList } = require("../../services");

const getIngredientsListController = async (req, res, next) => {
  const result = await getIngredientsList(req.body);
  res.json(result);
};

module.exports = { getIngredientsListController };
