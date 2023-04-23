const { Recipe } = require("../../models");

const addOwnRecipe = async (req) => {
  const imageURL = req.file.path;

  const {
    title,
    category,
    area,
    instructions,
    description,
    time,
    youtube,
    tags,
    ingredients,
  } = req.body;

  console.log(ingredients);

  const newRecipe = await Recipe.create({
    title,
    category,
    area,
    instructions,
    description,
    thumb: imageURL,
    preview: imageURL,
    time,
    youtube,
    tags,
    ingredients,
    owner: req.user.id,
  });

  return newRecipe;
};

module.exports = { addOwnRecipe };
