const { Recipe } = require("../../models");
const { categories } = require("../../helpers");
const { RequestError } = require("../../helpers");

const getRecipesByCategory = async (category, skip, limit) => {
  if (!categories.includes(category)) {
    throw new RequestError(`Category ${category.toLowerCase()} does not found`);
  }

  const result = await Recipe.aggregate([
    {
      $match: {
        category,
      },
    },
    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
    { $skip: skip },
    { $limit: limit },
  ]);

  return result;
};

module.exports = { getRecipesByCategory };
