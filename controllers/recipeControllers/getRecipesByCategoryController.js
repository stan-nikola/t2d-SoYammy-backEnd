const { getRecipesByCategory } = require("../../services");

const getRecipesByCategoryController = async (req, res, next) => {
  const { category } = req.params;
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;

  const normalizeCategory = category.replace(/^\w/, (c) => c.toUpperCase());

  const result = await getRecipesByCategory(normalizeCategory, skip, limit);

  res.status(200).json(result);
};

module.exports = { getRecipesByCategoryController };
