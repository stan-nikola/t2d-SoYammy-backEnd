const { RequestError } = require("../../helpers");
const { Recipe } = require("../../models/recipeModel");

const getRecipeByIngredients = async (req) => {
  let { query, page = 1, limit = 12 } = req.query;

  if (query?.trim() === "" || !query)
    throw new RequestError("Query string is empty or absent");

  limit = parseInt(limit);

  const skip = (page - 1) * limit;

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
    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
    { $skip: skip },
    { $limit: limit },
  ]);
  if (finnedRecipes.length === 0)
    throw new RequestError(
      `Recipe with ${ingredient} not found, try find with another ingredient`
    );

  return finnedRecipes;
};

module.exports = { getRecipeByIngredients };
