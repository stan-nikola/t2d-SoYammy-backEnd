const { Recipe } = require("../../models");

const getUserFavoriteRecipes = async (req) => {
  const id = req.user._id.toString();

  const userFavoriteRecipes = await Recipe.aggregate([
    { $unwind: "$favorites" },
    { $match: { "favorites.userId": id } },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingredientsData",
      },
    },
  ]);

  return userFavoriteRecipes;
};

module.exports = { getUserFavoriteRecipes };
