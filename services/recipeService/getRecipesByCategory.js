const { Recipe } = require("../../models");

const getRecipesByCategory = async (req, res, next) => {
  const { category } = req.params;

  console.log(category);

  const result = await Recipe.find({ category: `${category}` }).sort({
    createdAt: -1,
  });
  return result;
};

module.exports = getRecipesByCategory;
