const { Recipe } = require("../../models");

const ObjectId = require("mongodb").ObjectId;

const getRecipeById = async ({ id }) => {
  console.log(ObjectId(id));
  const result = await Recipe.aggregate([
    { $match: { _id: new ObjectId(id) } },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingredientsData",
      },
    },
  ]);

  //   console.log(result);
  return result;
};

module.exports = getRecipeById;
