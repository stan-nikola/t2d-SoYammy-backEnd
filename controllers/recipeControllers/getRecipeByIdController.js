const { getRecipeById } = require("../../services");

const getRecipeByIdController = async (req, res, next) => {
  const { id } = req.params;
  const result = await getRecipeById(id);
  console.log(result);
  res.status(200).json(result);
};

module.exports = getRecipeByIdController;
