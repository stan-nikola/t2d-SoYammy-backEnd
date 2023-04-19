const { Ingredient } = require("../../models");

// const ObjectId = require("mongodb").ObjectId;

const getIngredientsList = async () => {
  // console.log(id);
  // const qwe = await Recipe.aggregate([
  //   { $match: { _id: new ObjectId(id) } },
  //   {
  //     $lookup: {
  //       from: "ingredients",
  //       localField: "ingredients.id",
  //       foreignField: "_id",
  //       as: "ingredientsData",
  //     },
  //   },
  // ]);

  const ingredients = await Ingredient.find({});

  return ingredients;
};

module.exports = { getIngredientsList };
