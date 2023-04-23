const { Recipe } = require("../../models");

const popularRecipes = async (req) => {
  let { page = 1, limit = 4 } = req.query;

  limit = parseInt(limit);

  const skip = (page - 1) * limit;

  return Recipe.aggregate([
    {
      $addFields: {
        favorites_count: { $size: { $ifNull: ["$favorites", []] } },
      },
    },
    {
      $match: { favorites_count: { $ne: 0 } },
    },
    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
    {
      $sort: { favorites_count: -1 },
    },
    { $unset: ["favorites_count"] },
    { $skip: skip },
    { $limit: limit },
  ]);
};
module.exports = { popularRecipes };
