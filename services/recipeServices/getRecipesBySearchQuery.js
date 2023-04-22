const { Recipe } = require("../../models");
const { RequestError } = require("../../helpers");

const getRecipesBySearchQuery = async (title) => {
  const result = await Recipe.find({
    title: { $regex: new RegExp(title, "i") },
  });

  if (!result.length) {
    throw new RequestError(
      `Recipes with word ${title.toLowerCase()} in the title does not found`
    );
  }

  return result;
};

module.exports = { getRecipesBySearchQuery };
