const { Recipe } = require("../../models/recipeModel");

const getRecipeByIngredients = async (req) => {
  const { query } = req.query;

  const ingredient = query.toString();

  return await Recipe.aggregate([
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
      $match: {
        "ingredients.ttl": { $regex: ingredient, $options: "i" },
      },
    },
    {
      $unset: ["ingredientsData", "ingredients.id"],
    },
  ]);
};

module.exports = { getRecipeByIngredients };
