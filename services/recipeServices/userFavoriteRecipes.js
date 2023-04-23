const { Recipe } = require("../../models");

const getUserFavoriteRecipes = async (req) => {
  const id = req.user._id.toString();

  let { page = 1, limit = 4 } = req.query;

  limit = parseInt(limit);

  const skip = (page - 1) * limit;

  const userFavoriteRecipes = await Recipe.aggregate([
    {
      $match: {
        "favorites.userId": id,
      },
    },

    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
    { $skip: skip },
    { $limit: limit },
  ]);

  return userFavoriteRecipes;
};

module.exports = { getUserFavoriteRecipes };
