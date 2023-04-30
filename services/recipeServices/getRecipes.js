const { Recipe } = require("../../models");

const getRecipes = async () => {
  const result = await Recipe.aggregate([
    {
      $match: {
        owner: { $exists: false },
      },
    },
    { $sort: { createdAt: 1 } },
    { $group: { _id: "$category", recipes: { $push: "$$ROOT" } } },
    { $project: { recipes: { $slice: ["$recipes", 4] } } },
  ]);

  return result;
};

module.exports = { getRecipes };
