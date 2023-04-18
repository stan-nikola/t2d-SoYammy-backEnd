const { Recipe } = require("../../models/recipeModel");

const { Ingredient } = require("../../models");

const getRecipeByIngredients = async ({ ingredient }) => {
  const finnedIngredient = await Ingredient.find({
    ttl: { $regex: ingredient, $options: "i" },
  });

  const ingredientsArr = [];

  finnedIngredient.map((item) => ingredientsArr.push(item.id));

  const recipes = await Recipe.find({
    "ingredients.id": { $in: ingredientsArr },
  });

  // console.log(ingredientsArr);

  return recipes;
};

module.exports = { getRecipeByIngredients };
