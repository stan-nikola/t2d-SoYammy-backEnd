const { Recipe } = require("../../models");

const popularRecipes = async () => {
  return Recipe.aggregate([
    {
      $addFields: {
        favorites_count: { $size: { $ifNull: ["$favorites", []] } },
      },
    },
    {
      $match: { favorites_count: { $ne: 0 } },
    },
    {
      $sort: { favorites_count: -1 },
    },
    { $unset: ["favorites_count"] },
    { $limit: 4 },
  ]);
};
module.exports = { popularRecipes };
