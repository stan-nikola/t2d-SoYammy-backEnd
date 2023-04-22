const { Recipe } = require("../../models");
const { categories } = require("../../helpers");
const { RequestError } = require("../../helpers");

const getRecipesByCategory = async (category, skip, limit) => {
  if (!categories.includes(category)) {
    throw new RequestError(`Categoty ${category.toLowerCase()} does not found`);
  }

  const result = await Recipe.find({ category }, "")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return result;
};

module.exports = { getRecipesByCategory };
