// const { getRecipesByCategory } = require("../../services");

// const getRecipesByCategoryController = async (req, res, next) => {
//   const result = await getRecipesByCategory();
//   res.status(200).json(result);
// };

const { Recipe } = require("../../models");

const getRecipesByCategoryController = async (req, res, next) => {
  const { category } = req.params;

  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;

  //   const result = await Recipe.find({ category }, "", {
  //     skip,
  //     limit,
  //   });

  const result = await Recipe.find({ category }, "")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.status(200).json(result);
};

module.exports = getRecipesByCategoryController;
