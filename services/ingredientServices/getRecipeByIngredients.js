const { RequestError } = require("../../helpers");
const { Recipe } = require("../../models/recipeModel");

const getRecipeByIngredients = async (req) => {
  const { query } = req.query;

  const ingredient = query.toString();

  const finnedRecipes = await Recipe.aggregate([
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
  if (finnedRecipes.length <= 0)
    throw new RequestError(
      `Recipe with ${ingredient} not found, try find with another ingredient`
    );

  return finnedRecipes;
};

module.exports = { getRecipeByIngredients };
