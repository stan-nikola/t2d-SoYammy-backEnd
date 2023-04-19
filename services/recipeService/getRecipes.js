const { Recipe } = require("../../models");

const getRecipes = async () => {
  const result = await Recipe.aggregate([
    { $sort: { createdAt: 1 } },
    { $group: { _id: "$category", recipes: { $push: "$$ROOT" } } },
    { $project: { recipes: { $slice: ["$recipes", 4] } } },
  ]);

  return result;
};

module.exports = { getRecipes };
