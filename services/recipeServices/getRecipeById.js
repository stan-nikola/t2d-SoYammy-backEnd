const { Recipe } = require("../../models");
const { RequestError } = require("../../helpers");

const ObjectId = require("mongodb").ObjectId;

const getRecipeById = async (id) => {
  const result = await Recipe.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
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

  if (!result.length) {
    throw new RequestError(`Recipe with id: ${id} not found`);
  }

  return result[0];
};

module.exports = { getRecipeById };
