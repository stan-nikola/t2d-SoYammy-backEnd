const { Recipe } = require("../../models");

const addOwnRecipe = async (body) => {
  console.log(body);

  const {
    title,
    category,
    area,
    instructions,
    description,
    thumb,
    preview,
    time,
    youtube,
    tags,
    ingredients,
  } = body;

  const newRecipe = Recipe.create({
    title,
    category,
    area,
    instructions,
    description,
    thumb,
    preview,
    time,
    youtube,
    tags,
    ingredients,
  });

  return newRecipe;
};

module.exports = { addOwnRecipe };
