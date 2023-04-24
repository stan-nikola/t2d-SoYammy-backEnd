const { Recipe } = require("../../models");
const { RequestError } = require("../../helpers");

const getRecipesBySearchQuery = async (title, skip, limit) => {
  if (!title) {
    throw new RequestError("query must not be empty");
  }

  const result = await Recipe.aggregate([
    {
      $match: {
        title: { $regex: new RegExp(title, "i") },
      },
    },
    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
    { $skip: skip },
    { $limit: limit },
  ]);

  if (!result.length) {
    throw new RequestError(
      `Recipes with word ${title.toLowerCase()} in the title does not found`
    );
  }

  return result;
};

module.exports = { getRecipesBySearchQuery };
