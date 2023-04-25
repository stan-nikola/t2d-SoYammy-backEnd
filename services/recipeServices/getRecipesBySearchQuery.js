const { Recipe } = require("../../models");
const { RequestError } = require("../../helpers");

const getRecipesBySearchQuery = async (title, skip, limit) => {
  if (title === undefined) {
    throw new RequestError("Recipe title query must be passed");
  }
  if (title?.trim() === "") return [];

  return await Recipe.aggregate([
    {
      $match: {
        title: { $regex: new RegExp(title, "i") },
      },
    },
    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
    { $skip: skip },
    { $limit: limit },
  ]);
};

module.exports = { getRecipesBySearchQuery };
