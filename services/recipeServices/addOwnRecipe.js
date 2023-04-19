const { Recipe } = require("../../models");

const addOwnRecipe = async (req) => {
  const imageURL = req.file.path;
  console.log(req.body);
  console.log(req);

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

  const newRecipe = Recipe.create({
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
  });

  return newRecipe;
};

module.exports = { addOwnRecipe };
