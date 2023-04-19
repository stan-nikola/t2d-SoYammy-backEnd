const { Recipe } = require("../../models");

const getRecipesByCategory = async (category, skip, limit) => {
  const result = await Recipe.find({ category }, "")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return result;
};

module.exports = { getRecipesByCategory };
