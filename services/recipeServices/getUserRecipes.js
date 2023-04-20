const ObjectId = require("mongodb").ObjectId;
const { Recipe } = require("../../models");

const getUserRecipes = async (req) => {
  return await Recipe.aggregate([
    {
      $match: {
        owner: new ObjectId(req.user._id),
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
};

module.exports = { getUserRecipes };
