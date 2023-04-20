const { Recipe } = require("../../models");

const getRecipesBySearchQuery = async (title) => {
  const result = await Recipe.find({
    title: { $regex: new RegExp(title, "i") },
  });
  return result;
};

module.exports = { getRecipesBySearchQuery };
