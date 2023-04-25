const { RequestError } = require("../../helpers");
const { Recipe } = require("../../models/recipeModel");

const getRecipeByIngredients = async (req) => {
  let { query, page = 1, limit = 12 } = req.query;

  if (query === undefined) {
    throw new RequestError("Ingredient name query must be passed");
  }

  if (query?.trim() === "" || !query) return [];

  limit = parseInt(limit);

  const skip = (page - 1) * limit;

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
    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
    { $skip: skip },
    { $limit: limit },
  ]);
};

module.exports = { getRecipeByIngredients };
