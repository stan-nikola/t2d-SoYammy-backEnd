const { Recipe } = require("../../models/recipeModel");

const { Ingredient } = require("../../models");

const getRecipeByIngredients = async (req) => {
  const { query } = req.query;

  const ingredient = query.toString();

  const finnedIngredient = await Ingredient.find({
    ttl: { $regex: ingredient, $options: "i" },
  });

  const ingredientsArr = [];

  finnedIngredient.map((item) => ingredientsArr.push(item.id));

  return await Recipe.find({
    "ingredients.id": { $in: ingredientsArr },
  });
};

module.exports = { getRecipeByIngredients };
