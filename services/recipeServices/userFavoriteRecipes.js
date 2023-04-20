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
    {
      $set: {
        ingredients: {
          $map: {
            input: "$ingredients",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  $arrayElemAt: [
                    "$ingredientsData",
                    {
                      $indexOfArray: ["$ingredientsData._id", "$$this.id"],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ["ingredientsData", "ingredients.id"],
    },
  ]);

  return userFavoriteRecipes;
};

module.exports = { getUserFavoriteRecipes };
